# 📺 Streamify – Video Calling & Chatting Application

Streamify is a **real-time video calling and chatting application** built using the **MERN stack** with seamless integration of the **Stream API**.  
It provides smooth video calls, instant messaging, and a modern **glassmorphic UI** powered by **React + Tailwind CSS**.  

---

## ✨ Features

- 🌐 **Real-time Messaging** – Instant chat with **typing indicators** and **emoji reactions**  
- 📹 **Video Calling** – **1-on-1 and group calls** with **screen sharing** & **call recording**  
- 🔐 **Secure Authentication** – **JWT-based login**, protected routes & role-based access  
- 🌍 **Language Exchange Mode** – Interactive platform with **32 unique UI themes**  
- ⚡ **Modern Tech Stack** – Built using **React, Express, MongoDB, TailwindCSS, TanStack Query**  
- 🧠 **Global State Management** – Lightweight and efficient state handling with **Zustand**  
- 🚨 **Robust Error Handling** – End-to-end error management for both **frontend & backend**  
- 🚀 **Free Deployment Ready** – Optimized for deployment on platforms like Vercel/Render/Netlify  
- 🎯 **Scalable Architecture** – Powered by **Stream API** for chat & video infrastructure  
- ⏳ **Continuous Enhancements** – Designed for extensibility with future-ready features  

---

## 🛠 Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- React Router  
- TanStack Query  
- Zustand (state management)  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB  
- JWT Authentication  

**APIs & Services:**  
- Stream API (Video & Chat)  

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/) (local or cloud e.g., MongoDB Atlas)  
- [Stream API Key](https://getstream.io/)  
- [OpenAI API Key](https://platform.openai.com/)  

---

### 🔧 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/streamify.git
   cd streamify
Install dependencies

bash
Copy
Edit
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
Setup environment variables

Create a .env file inside the server folder and add:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
Run the app

bash
Copy
Edit
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start
Visit http://localhost:3000/ 🚀

📸 Screenshots
Add screenshots/gifs of your app here once available!

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a pull request.

📜 License
This project is licensed under the MIT License – see the LICENSE file for details.

👨‍💻 Author
Manya Rawat

GitHub: @your-username

LinkedIn: Your LinkedIn Profile

⭐ If you like this project, give it a star on GitHub!
pgsql
Copy
Edit

Would you like me to also add a **project folder structure section** (showing `client/`, `server/`, `components/`, etc.) so contributors instantly know how the repo is organized?






You said:
structure the whole in md format


ChatGPT said:
Got it 🚀 — here’s your complete, structured README.md in markdown format with everything neatly organized, including a project folder structure section:

markdown
Copy
Edit
# 📺 Streamify – Video Calling & Chatting Application

Streamify is a **real-time video calling and chatting application** built using the **MERN stack** with seamless integration of the **Stream API**.  
It provides smooth video calls, instant messaging, and a modern **glassmorphic UI** powered by **React + Tailwind CSS**.  

---

## ✨ Features

- 🌐 **Real-time Messaging** – Instant chat with **typing indicators** and **emoji reactions**  
- 📹 **Video Calling** – **1-on-1 and group calls** with **screen sharing** & **call recording**  
- 🔐 **Secure Authentication** – **JWT-based login**, protected routes & role-based access  
- 🌍 **Language Exchange Mode** – Interactive platform with **32 unique UI themes**  
- ⚡ **Modern Tech Stack** – Built using **React, Express, MongoDB, TailwindCSS, TanStack Query**  
- 🧠 **Global State Management** – Lightweight and efficient state handling with **Zustand**  
- 🚨 **Robust Error Handling** – End-to-end error management for both **frontend & backend**  
- 🚀 **Free Deployment Ready** – Optimized for deployment on platforms like Vercel/Render/Netlify  
- 🎯 **Scalable Architecture** – Powered by **Stream API** for chat & video infrastructure  
- ⏳ **Continuous Enhancements** – Designed for extensibility with future-ready features  

---

## 🛠 Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- React Router  
- TanStack Query  
- Zustand (state management)  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB  
- JWT Authentication  

**APIs & Services:**  
- Stream API (Video & Chat)  
- OpenAI API (Friend Suggestions)  

---

## 📂 Project Structure

streamify/
│── client/ # Frontend (React + Tailwind)
│ ├── public/ # Static assets
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # App pages (Home, Chat, VideoCall, etc.)
│ │ ├── hooks/ # Custom React hooks
│ │ ├── context/ # Zustand & global state
│ │ ├── utils/ # Helper functions
│ │ ├── App.js # Root React component
│ │ └── index.js # Entry point
│ └── package.json
│
│── server/ # Backend (Node + Express)
│ ├── controllers/ # Route controllers
│ ├── models/ # MongoDB models
│ ├── routes/ # API routes
│ ├── middleware/ # Auth & error handling
│ ├── config/ # DB & environment setup
│ ├── server.js # Entry point
│ └── package.json
│
│── .env.example # Sample environment variables
│── README.md # Project documentation
│── LICENSE # License file

yaml
Copy
Edit

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/) (local or cloud e.g., MongoDB Atlas)  
- [Stream API Key](https://getstream.io/)  
- [OpenAI API Key](https://platform.openai.com/)  

---

### 🔧 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/streamify.git
   cd streamify
Install dependencies

bash
Copy
Edit
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
Setup environment variables

Create a .env file inside the server folder and add:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
Run the app

bash
Copy
Edit
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start
Visit http://localhost:3000/ 🚀


## 📸 Screenshots

<img width="1625" height="727" alt="image" src="https://github.com/user-attachments/assets/fb57339d-5f56-4fee-a220-23ba6844cc2a" />

<img width="1902" height="862" alt="image" src="https://github.com/user-attachments/assets/e0484212-9c9e-4aad-bfec-2c929cc5c7fd" />


---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Manya Rawat**

* GitHub: [manya014](https://github.com/manya014)
* LinkedIn: [Manya Rawat](https://www.linkedin.com/in/manya-rawat-55759627b/))

---

### ⭐ If you like this project, give it a star on GitHub!

```

Would you like me to also **add API endpoint documentation** (e.g., `/api/auth/login`, `/api/messages`, `/api/call`) so your README looks more developer-friendly?
```
