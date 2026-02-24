import { Navigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";

export default function PublicRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to="/" replace /> : children;
}
