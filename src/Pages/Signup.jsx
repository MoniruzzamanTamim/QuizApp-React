import React, { useState } from "react";

import Illustration from "../Components/Illustration";
import Form from "../Components/Form";
import TextInput from "../Components/TextInput";
import Checkbox from "../Components/CheckBox";

import Button from "../Components/Button";

import { Link, useNavigate } from "react-router-dom";

import signupImage from "../assets/images/signup.png";

// ✅ Import Auth Hook
import { useAuth } from "../Authentication/AuthContext";

function Signup() { //Main SignUp  Funcion 

  const { signupUser } = useAuth(); 
  const navigate = useNavigate();

  // States
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");

  // ✅ Signup Submit Handler
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Password Match Check
    if (password !== confrimPassword) {
      return setError("Passwords do not match ❌");
    }

    // Agree Check
    if (!agree) {
      return setError("You must agree to Terms & Conditions ❌");
    }

    try {
      await signupUser(email, password, userName);
      setError("Signup Successful ✅");
      navigate("/");
    } catch (error) {
      setError(`${error.message} ❌`);
    }
  };

  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration Image={signupImage} />

        {/* ✅ Form Submit */}
        <Form onSubmit={handleSignUp}>
          {/* Name */}
          <TextInput
            type="text"
            placeholder="Enter name"
            icon="person"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

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

          {/* Confirm Password */}
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
            value={confrimPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {/* Checkbox */}
          <Checkbox
            text="I agree to the Terms & Conditions"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />

          {/* Showing Error */}
           {error && <span style={{padding:'10px 0'}} >{error}</span>}

          {/* Button */}
          <Button type="submit">
            <span>Submit Now</span>
          </Button>
           
          {/* Login Link */}
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Signup;
