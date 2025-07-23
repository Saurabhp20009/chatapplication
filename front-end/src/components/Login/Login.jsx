import React, { useState } from 'react'
import './Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // onLogin(email);
    } else {
      alert("Please enter valid credentials");
    }
  };

  
  
  return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />


      <button type="submit">Login</button>
        <p style={{ marginTop: '15px' }}>
          Don't have an account?{' '}
          <span  style={{ color: 'blue', cursor: 'pointer' }}>
            Register
          </span>
        </p>
    </form>
  </div>
  )
}
