import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Account from "./components/Account/Account";
import Register from "./components/Register/Register";

const App = () => {
  const isAuth = false;
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/account" element={isAuth ? <Account /> : <Login />} />
        <Route path="/register" element={isAuth ? <Account /> : <Register />} />
      </Routes>
    </Router>
  );
};

export default App;
