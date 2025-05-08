import { useState } from "react";
import "./App.css";
// import { AuthProvider } from "./context/AuthContext";
import Auth from "./components/Auth";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
// import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [studentList, setStudentList] = useState([]);

  const handleAddStudent = (student) => {
    setStudentList((prev) => [...prev, { id: Date.now(), ...student }]);
  };

  return (
    <>
      <div className="text-center p-4 bg-gray-300 ">
        <h1 className="text-4xl font-semibold text-gray-800">Student Dashboard</h1>
        <Auth />
        <StudentForm onAdd={handleAddStudent} />
        <StudentList />
        <div className="mt-8 px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Added Students
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto cursor-pointer">
            {studentList.map((student) => (
              <li
                key={student.id}
                className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md transition-shadow duration-200"
              >
                <p className="text-lg font-semibold text-blue-800">
                  Name :- {student.name}
                </p>
                <p className="text-sm text-blue-600">
                  Course :- {student.course}
                </p>
                <p className="text-sm text-gray-600">
                  Email :- {student.email}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <ToastContainer position="top-right" autoClose={1000} /> */}
    </>
  );
};

export default App;
