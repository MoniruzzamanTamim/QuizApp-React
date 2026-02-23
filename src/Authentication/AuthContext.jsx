/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";

// Firebase Import
import {app} from "./firebase";

// Firebase Auth Import
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

// Create Context
const AuthContext = React.createContext();

// Firebase Auth Init
const auth = getAuth(app);

// Provider Component
function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);

  // ✅ Current User State
  const [currentUser, setCurrentUser] = useState(null);

  // ============================================
  // ✅ Signup Function
  // ============================================
  const signupUser = async (email, password, username) => {
    // Create Account
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update Profile Name
    await updateProfile(userCredential.user, {
      displayName: username,
    });

    // Set User State
    setCurrentUser(userCredential.user);

    return userCredential;
  };

  // ============================================
  // ✅ Login Function
  // ============================================
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ============================================
  // ✅ Logout Function
  // ============================================
  const logoutUser = () => {
    return signOut(auth);
  };

  // ============================================
  // ✅ Track User Session (Auto Set CurrentUser)
  // ============================================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // ============================================
  // Context Value
  // ============================================
  const authValue = {
    currentUser,
    signupUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
