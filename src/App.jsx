import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/post" element={<CreatePost />} />
    </Routes>
  );
};

export default App;
