import { Navigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";

function PrivetRoute({ children }) {
  const { loading,currentUser } = useAuth();

  if (loading) return <h2>Loading...</h2>;
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children; 
}

export default PrivetRoute;
