import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { FaUserCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logout successful!");
      navigate("/");
    } catch (err) {
      toast.error("Logout failed: " + err.message);
    }
  };

  return (
    <>
      {/* Profile Section */}
      <div className="h-full flex justify-center items-center bg-gray-300 text-white">
        <div className="bg-gray-800 p-4 rounded-2xl shadow-xl w-96 text-center">
          {/* Profile Image */}
          <div className="relative">
            <FaUserCircle className="w-28 h-28 mx-auto rounded-full border-4 border-gray-700 shadow-lg" />
          </div>

          {user ? (
            <>
              {/* User Info */}
              {/* <h2 className="text-2xl font-semibold mt-2">{user.name}</h2> */}
              <p className="text-gray-300 mt-1 mb-2">{user.email}</p>
            </>
          ) : (
            <>
              {/* Optional: Placeholder or fallback */}
              {/* <h2 className="text-2xl font-semibold mt-4">Name</h2> */}
              <p className="text-gray-300 mt-2">Login to view your profile.</p>
            </>
          )}

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-5">
            <button
              onClick={() => {
                handleLogout();
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
};

export default Profile;
