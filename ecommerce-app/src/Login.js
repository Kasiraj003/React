import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "user@example.com" && password === "password") {
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;