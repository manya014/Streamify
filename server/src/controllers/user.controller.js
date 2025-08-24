import User from "../models/User.js";
import FriendRequest from "../models/FriendRequest.js"; 

import { OpenAI } from "openai";
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getRecommendedUsers(req, res) {
  try {
    const currentUserId = req.user.id;
    const currentUser = req.user;

    // Step 1: Fetch potential users
    const potentialUsers = await User.find({
      $and: [
        { _id: { $ne: currentUserId } },           // exclude self
        { _id: { $nin: currentUser.friends } },   // exclude existing friends
        { isOnboarded: true },                     // only onboarded
      ],
    }).lean();

    if (potentialUsers.length === 0) {
      return res.status(200).json([]);
    }

    // Step 2: Prepare input for AI
    const inputData = {
      currentUser: {
        id: currentUser._id,
        fullName: currentUser.fullName,
        bio: currentUser.bio,
        nativeLanguage: currentUser.nativeLanguage,
        learningLanguage: currentUser.learningLanguage,
        location: currentUser.location,
      },
      potentialFriends: potentialUsers.map((u) => ({
        id: u._id,
        fullName: u.fullName,
        bio: u.bio,
        nativeLanguage: u.nativeLanguage,
        learningLanguage: u.learningLanguage,
        location: u.location,
      })),
    };

    let recommendedIds = [];

    try {
      // Step 3: Call OpenAI
      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a recommendation engine for a language exchange app. Recommend friends based on shared native/learning languages, location, and bio.",
          },
          {
            role: "user",
            content: `Given this user: ${JSON.stringify(
              inputData.currentUser
            )}, rank the top 5 most compatible friends from this list: ${JSON.stringify(
              inputData.potentialFriends
            )}. Return ONLY a JSON array of user IDs in order.`,
          },
        ],
      });

      // Step 4: Parse AI response
      recommendedIds = JSON.parse(response.choices[0].message.content);
    } catch (err) {
      console.error("⚠️ OpenAI failed, using fallback:", err.message);
    }

    // Step 5: If AI failed → fallback to local matching
    let recommendedUsers;
    if (recommendedIds.length > 0) {
      recommendedUsers = recommendedIds
        .map((id) =>
          potentialUsers.find((u) => u._id.toString() === id.toString())
        )
        .filter(Boolean);
    } else {
      // Local fallback: prioritize same learning/native language or same location
      recommendedUsers = potentialUsers
        .filter(
          (u) =>
            u.nativeLanguage === currentUser.learningLanguage ||
            u.learningLanguage === currentUser.nativeLanguage ||
            u.location === currentUser.location
        )
        .slice(0, 5);

      // If still empty, just return first 5
      if (recommendedUsers.length === 0) {
        recommendedUsers = potentialUsers.slice(0, 5);
      }
    }

    res.status(200).json(recommendedUsers);
  } catch (error) {
    console.error("Error in getRecommendedUsers controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function getMyFriends(req, res) {
  try {
    const user = await User.findById(req.user.id)
      .select("friends")
      .populate(
        "friends",
        "fullName profilePic nativeLanguage learningLanguage"
      );

    res.status(200).json(user.friends);
  } catch (error) {
    console.error("Error in getMyFriends controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function sendFriendRequest(req, res) {
  try {
    const myId = req.user.id;
    const { id: recipientId } = req.params;

    if (myId === recipientId) {
      return res
        .status(400)
        .json({ message: "You can't send friend request to yourself" });
    }
    const recipient = await User.findById(recipientId);
    if (!recipient) {
      return res.status(404).json({ message: "Recipient not found" });
    }
    if (recipient.friends.includes(myId)) {
      return res
        .status(400)
        .json({ message: "You are already friends with this user" });
    }
    const existingRequest = await FriendRequest.findOne({
      $or: [
        { sender: myId, recipient: recipientId },
        { sender: recipientId, recipient: myId },
      ],
    });

    if (existingRequest) {
      return res
        .status(400)
        .json({
          message: "A friend request already exists between you and this user",
        });
    }

    const friendRequest = await FriendRequest.create({
      sender: myId,
      recipient: recipientId,
    });

    res.status(201).json(friendRequest);
  } catch (error) {
    console.error("Error in sendFriendRequest controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function acceptFriendRequest(req, res) {
  try {
    const { id: requestId } = req.params;

    const friendRequest = await FriendRequest.findById(requestId);

    if (!friendRequest) {
      return res.status(404).json({ message: "Friend request not found" });
    }

    if (friendRequest.recipient.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to accept this request" });
    }

    friendRequest.status = "accepted";
    await friendRequest.save();

    await User.findByIdAndUpdate(friendRequest.sender, {
      $addToSet: { friends: friendRequest.recipient },
    });

    await User.findByIdAndUpdate(friendRequest.recipient, {
      $addToSet: { friends: friendRequest.sender },
    });

    res.status(200).json({ message: "Friend request accepted" });
  } catch (error) {
    console.log("Error in acceptFriendRequest controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getFriendRequests(req, res) {
  try {
    const incomingReqs = await FriendRequest.find({
      recipient: req.user.id,
      status: "pending",
    }).populate("sender", "fullName profilePic nativeLanguage learningLanguage");

    const acceptedReqs = await FriendRequest.find({
      sender: req.user.id,
      status: "accepted",
    }).populate("recipient", "fullName profilePic");

    res.status(200).json({ incomingReqs, acceptedReqs });
  } catch (error) {
    console.log("Error in getPendingFriendRequests controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function getOutgoingFriendReqs(req, res) {
  try {
    const outgoingRequests = await FriendRequest.find({
      sender: req.user.id,
      status: "pending",
    }).populate("recipient", "fullName profilePic nativeLanguage learningLanguage");

    res.status(200).json(outgoingRequests);
  } catch (error) {
    console.log("Error in getOutgoingFriendReqs controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}