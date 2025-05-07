import { useEffect, useState } from "react";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

const mock = new AxiosMockAdapter(axios, { delayResponse: 1000 });
const mockData = [
  { id: 1, name: "Alice", email: "alice@example.com", course: "Math" },
  { id: 2, name: "Bob", email: "bob@example.com", course: "English" },
  { id: 3, name: "Charlie", email: "charlie@example.com", course: "Math" },
  { id: 4, name: "David", email: "david@example.com", course: "Science" },
  { id: 5, name: "Eve", email: "eve@example.com", course: "English" },
  { id: 6, name: "Frank", email: "frank@example.com", course: "Science" },
  { id: 7, name: "Grace", email: "grace@example.com", course: "Math" },
  { id: 8, name: "Henry", email: "henry@example.com", course: "English" },
  { id: 9, name: "Ivy", email: "ivy@example.com", course: "Math" },
  { id: 10, name: "Jack", email: "jack@example.com", course: "Science" },
  { id: 11, name: "Kelly", email: "kelly@example.com", course: "English" },
  { id: 12, name: "Liam", email: "liam@example.com", course: "Science" },
  { id: 13, name: "Mia", email: "mia@example.com", course: "English" },
  { id: 14, name: "Noah", email: "noah@example.com", course: "Science" },
  { id: 15, name: "Olivia", email: "olivia@example.com", course: "Math" },
];
mock.onGet("/api/students").reply(200, mockData);

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [course, setCourse] = useState("");

  useEffect(() => {
    axios.get("/api/students").then((res) => setStudents(res.data));
  }, []);

  const filtered = course
    ? students.filter((student) => student.course === course)
    : students;

  return (
    <div className="min-h-screen w-full bg-gray-300 my-5">
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
