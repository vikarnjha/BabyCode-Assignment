import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const API_URL = import.meta.env.VITE_BACKEND;

const Auth = () => {
  const [action, setAction] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleForgotPassword = async () => {
    toast.info("Not implemented yet!");
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.warn("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.warn("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Registration successful!");
      setAction("Sign In");
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        toast.info("Email is already in use.");
      } else if (err.code === "auth/weak-password") {
        toast.warn("Password should be at least 6 characters.");
      } else if (err.code === "auth/invalid-email") {
        toast.warn("Invalid email address.");
      } else {
        toast.error("Registration failed.");
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warn("Please enter both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      // Optional: navigate to dashboard or reset form
    } catch (err) {
      console.error(err);
      if (err.code === "auth/user-not-found") {
        toast.info("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        toast.warn("Incorrect password.");
      } else if (err.code === "auth/invalid-email") {
        toast.warn("Invalid email address.");
      } else {
        toast.error("Login failed.");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">{action}</h2>

          {action === "Sign Up" && (
            <div className="mb-3">
              <label className="block text-gray-400 mb-1">Name</label>
              <div className="flex items-center bg-gray-700 p-2 rounded-lg border border-gray-600">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent outline-none text-white"
                />
              </div>
            </div>
          )}

          <div className="mb-3">
            <label className="block text-gray-400 mb-1">Email</label>
            <div className="flex items-center bg-gray-700 p-2 rounded-lg border border-gray-600">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent outline-none text-white"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-gray-400 mb-1">Password</label>
            <div className="flex items-center bg-gray-700 p-2 rounded-lg border border-gray-600">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent outline-none text-white"
              />
              <span
                onClick={togglePassword}
                className="cursor-pointer text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {action === "Sign In" && (
            <div className="text-right text-blue-500 active:scale-95 transition-transform cursor-pointer">
              <a
                href="#"
                className="hover:text-blue-400 transition"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </a>
            </div>
          )}

          {action === "Sign Up" && (
            <div className="mb-3">
              <label className="block text-gray-400 mb-1">
                Confirm Password
              </label>
              <div className="flex items-center bg-gray-700 p-2 rounded-lg border border-gray-600">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-transparent outline-none text-white"
                />
                <span
                  onClick={toggleConfirmPassword}
                  className="cursor-pointer text-gray-400"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
          )}

          <div className="flex justify-between gap-3">
            <button
              className="w-full py-2 mt-3 bg-blue-600 active:scale-90 active:bg-blue-700 hover:bg-blue-700 rounded-lg cursor-pointer"
              onClick={
                action === "Sign Up"
                  ? handleRegister
                  : () => setAction("Sign Up")
              }
            >
              Sign Up
            </button>
            <button
              className="w-full py-2 mt-3 bg-blue-600 active:scale-90 active:bg-blue-700 hover:bg-blue-700 rounded-lg cursor-pointer"
              onClick={
                action === "Sign In" ? handleLogin : () => setAction("Sign In")
              }
            >
              Sign In
            </button>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={1000} />
      </div>
    </>
  );
};

export default Auth;
