import { useEffect, useState } from "react";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { useStudent } from "../context/StudentContext";

const mock = new AxiosMockAdapter(axios, { delayResponse: 1000 });

const mockData = [
  { id: 1, name: "Alice", email: "alice@example.com", course: "Math" },
  { id: 2, name: "Bob", email: "bob@example.com", course: "English" },
  { id: 3, name: "Charlie", email: "charlie@example.com", course: "Science" },
  { id: 4, name: "David", email: "david@example.com", course: "Math" },
  { id: 5, name: "Eve", email: "eve@example.com", course: "English" },
  { id: 6, name: "Frank", email: "frank@example.com", course: "Science" },
];
mock.onGet("/api/students").reply(200, mockData);

const StudentList = () => {
  const { studentItems } = useStudent();
  const [students, setStudents] = useState([]);
  const [course, setCourse] = useState("");

  useEffect(() => {
    axios.get("/api/students").then((res) => setStudents(res.data));
  }, []);

  const allStudents = [...students, ...studentItems]; // Combine mock + new
  const filtered = course
    ? allStudents.filter((student) => student.course === course)
    : allStudents;

  return (
    <div className="min-h-screen w-full bg-gray-300 py-5">
      <div className="max-w-md mx-auto p-5 bg-gray-400 bg-opacity-100 shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Filter by Course
        </h2>

        <select
          onChange={(e) => setCourse(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer bg-gray-300 bg-opacity-100"
        >
          <option value="">All Courses</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>

        <ul className="space-y-4">
          {filtered.map((student) => (
            <li
              key={student.id}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-all duration-200 cursor-pointer"
            >
              <p className="text-lg font-semibold text-blue-800">
                Name :- {student.name}
              </p>
              <p className="text-sm text-blue-600">
                Course :- {student.course}
              </p>
              <p className="text-sm text-gray-600">Email :- {student.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
