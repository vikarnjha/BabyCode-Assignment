import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      toast.info("You are not logged in!");
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [loading, user]);

  if (loading) return <Loading />;
  if (redirect) return <Navigate to="/" replace />;
  return children;
};

// HomeRoute.jsx
const HomeRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      toast.info("You are already logged in!");
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [loading, user]);

  if (loading) return <Loading />;
  if (redirect) return <Navigate to="/home" replace />;
  return children;
};

export { ProtectedRoute, HomeRoute };
