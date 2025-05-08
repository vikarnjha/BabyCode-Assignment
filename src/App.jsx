import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { ProtectedRoute, HomeRoute } from "./components/ProtectedRoute";

const App = () => {
  // const [studentList, setStudentList] = useState([]);

  const handleAddStudent = (student) => {
    // setStudentList((prev) => [...prev, { id: Date.now(), ...student }]);
    console.log(student);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomeRoute>
                <div className="flex flex-col h-dvh">
                  <Navbar />
                  <Auth />
                </div>
              </HomeRoute>
            }
          />
          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <div>
                  <Navbar />
                  <StudentList />
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <div className="flex flex-col h-dvh">
                  <Navbar />
                  <Profile />
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <div className="flex flex-col h-dvh">
                  <Navbar />
                  <StudentForm onAdd={handleAddStudent} />
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
};

export default App;
