import React, { useState } from "react";
import "./ForgetPassword.css";
import { Typography, Button } from "@mui/material";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="forgotPassword">
      <form className="forgotPasswordForm" onSubmit={handleOnSubmit}>
        <Typography
          variant="h6"
          style={{ padding: "2vmax", textAlign: "center", color: "crimson" }}
        >
          Forgot Password? No worries, we can fix that easily!
        </Typography>
        <input
          className="forgotPasswordInputs"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button type="submit">Send Token</Button>
      </form>
    </div>
  );
};

export default ForgetPassword;
