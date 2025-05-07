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
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">
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
        <input
          name="course"
          type="text"
          placeholder="Course"
          value={form.course}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-color cursor-pointer"
        >
          Add Student
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
};

export default StudentForm;
