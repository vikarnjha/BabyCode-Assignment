# 🎓 Student Management Dashboard

A simple and responsive React-based student management system built as part of an internship assignment. It supports secure authentication with Firebase, student listing with filtering by course, and adding new students (only when logged in).

---

## 🚀 Features

- 🔐 **Firebase Authentication** (Login / Logout)
- 🧑‍🎓 **Student List** from a mock API
- 📚 **Filter Students** by course (Math, Science, English)
- ➕ **Add Student Form** (Protected Route)
- 🚫 **Auth-Guarded Routing** using React Router
- ⚛️ **State Management** with React Hooks + Context API
- 🍞 **Toast Notifications** for all important user actions

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Auth:** Firebase Authentication
- **Routing:** React Router
- **API:** Mock API (AxiosMockAdapter)
- **Notifications:** React Toastify

---

## ⚙️ Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com) and create a new project.
2. Enable **Email/Password** authentication under **Authentication > Sign-in Method**.
3. Replace the Firebase config in `src/firebase.js`:

```js
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ... other configs
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---

## 🧪 Run Locally

```bash
git clone https://github.com/vikarnjha/BabyCode-Assignment.git
npm install
npm run dev
```

---

## 🔐 Authentication Flow

- ✅ Only **logged-in users** can access the `/home` route.
- ❌ **Logged-in users** are prevented from accessing `/` (login page).
- 🔔 **Toast feedback** is shown on login, logout, and redirect conditions.

---


## ✅ Assignment Objectives Covered

- ✅ Firebase login/logout functionality
- ✅ Protected routes using React Router
- ✅ Display and filter the student list
- ✅ Auth-protected add student form
- ✅ State management via context/hooks
- ✅ User feedback with toast messages

---

## 📜 License

This project is built for educational and assignment submission purposes only.
