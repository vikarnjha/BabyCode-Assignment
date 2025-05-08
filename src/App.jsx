import { useState } from "react";
import "./App.css";
// import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  // const [studentList, setStudentList] = useState([]);

  const handleAddStudent = (student) => {
    // setStudentList((prev) => [...prev, { id: Date.now(), ...student }]);
    console.log(student);
    toast.success("Student added successfully!");
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // <HomeRoute>
              <div className="flex flex-col h-dvh">
                <Navbar />
                <Auth />
              </div>
              // </HomeRoute>
            }
          />
          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              // <ProtectedRoute>
              <div className="flex flex-col h-dvh">
                <Navbar />
                <StudentList />
              </div>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              // <ProtectedRoute>
              <div className="flex flex-col h-dvh">
                <Navbar />
                <Profile />
              </div>
              // </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              // <ProtectedRoute>
              <div className="flex flex-col h-dvh">
                <Navbar />
                <StudentForm onAdd={handleAddStudent} />
              </div>
              // </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
};

export default App;
