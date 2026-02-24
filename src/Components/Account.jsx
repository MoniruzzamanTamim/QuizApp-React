import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";

// ✅ Auth Hook
import { useAuth } from "../Authentication/AuthContext";

function Account() {

    const [error, setError] = useState("");
  const { currentUser, logoutUser } = useAuth();
  const navigate = useNavigate();

  // ✅ Logout Handler
  const handleLogout = async () => {
    try {
      await logoutUser();
      alert("Logout Successful ✅");
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (

    <>
    {error && <span>{error}</span>}
    <div className="account d-flex justify-content-end align-items-center">
      
      {/* ✅ যদি User Logged In থাকে */}
      {currentUser ? (
        <>
          {/* User Name */}
          <span
            className="material-icons-outlined fw-bold text-white me-2"
            title="Account"
          >
            account_circle
          </span>

          <span className="text-white fw-bold me-3">
            {currentUser.displayName || currentUser.email}
          </span>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="btn btn-danger btn-sm"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          {/* ❌ Logged Out হলে Signup/Login দেখাবে */}
          <span
            className="material-icons-outlined fw-bold text-white me-2"
            title="Account"
          >
            account_circle
          </span>
          <Link
            to="/signup"
            className="p-2 fw-bold text-decoration-none text-white"
          >
            Signup
          </Link>

          <Link
            to="/login"
            className="p-2 fw-bold text-decoration-none text-white"
          >
            Login
          </Link>
        </>
      )}
    </div>
    </>
  );
}

export default Account;
