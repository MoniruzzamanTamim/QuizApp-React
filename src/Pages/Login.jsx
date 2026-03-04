import React, { useState } from "react";

import Illustration from "../Components/Illustration";
import Form from "../Components/Form";
import TextInput from "../Components/TextInput";
import Button from "../Components/Button";

import { Link, useNavigate } from "react-router-dom";

import loginImage from "../assets/images/login.png";

// ✅ Auth Hook
import { useAuth } from "../Authentication/AuthContext";

function Login() {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Login Submit Handler
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginUser(email, password);
      // alert("Login Successful ✅");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration Image={loginImage} />

        {/* ✅ Form Submit */}
        <Form onSubmit={handleLogin}>
          {/* Email */}
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Error Message */}
          {error && (
            <h3 style={{ padding: "10px 0", color: "red" }}>
              {error}
            </h3>
          )}

          {/* Button */}
          <Button type="submit">
            <span>Submit Now</span>
          </Button>

          {/* Signup Link */}
          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
