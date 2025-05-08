import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const StudentForm = ({ onAdd }) => {
  const { user } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", course: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return toast.error("Please log in to add a student.");
    const { name, email, course } = form;
    if (!name || !email || !course) {
      toast.warning("All fields are required.");
      return;
    }
    onAdd(form);
    setForm({ name: "", email: "", course: "" });
    toast.success("Student added successfully!");
  };
 
  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-300 py-5">
      <form
        onSubmit={handleSubmit}
        className="p-6 max-w-md mx-auto mt-5 space-y-4 bg-gray-400 bg-opacity-100 shadow-lg rounded-xl"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Add Student
        </h2>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="course"
          value={form.course}
          placeholder="Course"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer bg-gray-300 bg-opacity-100"
        >
          <option value="">Select</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-color cursor-pointer"
        >
          Add Student
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
};

export default StudentForm;
