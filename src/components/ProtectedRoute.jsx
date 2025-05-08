import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    console.log("User not authenticated, redirecting...");
    toast.info("You are not logged in!");
    return <Navigate to="/" replace />;
  }

  return children;
};

const HomeRoute = ({ children }) => {
  const { user} = useAuth();

  if (user) {
    console.log("Already logged in, redirecting...");
    toast.info("You are already logged in!");
    return <Navigate to="/home" replace />;

  }
  return children;
};

export { ProtectedRoute, HomeRoute };