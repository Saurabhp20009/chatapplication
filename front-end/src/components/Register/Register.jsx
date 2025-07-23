import React, { useState } from "react";
import { auth, provider } from "";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Email & Password Registration
  const handleRegister = (e) => {
    e.preventDefault();

    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          //   onRegister(user.email); // Pass back to App.js
        })
        .catch((error) => {
          console.error("Registration Error:", error.message);
          alert(error.message);
        });
    } else {
      alert("Please enter both email and password");
    }
  };

  // 🔹 Google Sign-Up
  const handleGoogleRegister = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // onRegister(user.email);
      })
      .catch((error) => {
        console.error("Google Sign-Up Error:", error);
        alert("Google sign up failed. Try again.");
      });
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>

        <button
          type="button"
          onClick={handleGoogleRegister}
          className="google-button"
        >
          Sign up with Google
        </button>

        <p style={{ marginTop: "15px" }}>
          Already have an account?{" "}
          <span
            // onClick={toggleForm}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};
