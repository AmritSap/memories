import React, { useState } from "react";
import "./Login.css";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showLogin, setShowLogin] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleOnSubmit}>
        <Typography
          variant="h4"
          style={{ padding: "2vmax", textAlign: "center", color: "crimson" }}
        >
          Welcome to my Memories App!
        </Typography>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={showLogin ? "text" : "password"}
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            setShowLogin(!showLogin);
          }}
        >
          {showLogin ? (
            <label>HIDE PASSWORD</label>
          ) : (
            <label onClick={() => setShowLogin(showLogin)}>VIEW PASSWORD</label>
          )}
        </Button>

        <Link to="/forgot/password">
          <Typography variant="h6">Forget Password?</Typography>
        </Link>
        <Button
          type="submit"
          style={{
            border: "1px solid blue",
            backgroundColor: "rgb(38, 63, 173)",
            color: "white",
          }}
        >
          Login
        </Button>

        <Link to="/register">
          <Typography variant="h6">New here? Register now </Typography>
        </Link>
      </form>
    </div>
  );
};

export default Login;
