import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Account from "./components/Account/Account";
import Register from "./components/Register/Register";
import PostForm from "./components/PostForm/PostForm";
import Home from "./components/Home/Home";
import ForgetPassword from "./components/ForgotPassword/ForgotPassword";

const App = () => {
  const isAuth = false;
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgot/password" element={<ForgetPassword />} />
        <Route path="/account" element={isAuth ? <Account /> : <Login />} />
        <Route path="/register" element={isAuth ? <Account /> : <Register />} />
        <Route path="/newPost" element={isAuth ? <PostForm /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App;
