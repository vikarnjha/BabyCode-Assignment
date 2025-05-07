import {useState} from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Auth from "./components/Auth";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";

const App = () => {
  const [studentList, setStudentList] = useState([]);

  const handleAddStudent = (student) => {
    setStudentList((prev) => [...prev, { id: Date.now(), ...student }]);
  };

  return (
    <AuthProvider>
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <Auth />
        <StudentForm onAdd={handleAddStudent} />
        <StudentList />
        <div className="mt-4">
          <h2 className="font-semibold">Added Students:</h2>
          <ul>
            {studentList.map((s) => (
              <li key={s.id}>{s.name} - {s.course}</li>
            ))}
          </ul>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
