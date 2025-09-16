import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Error from "./pages/Error";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default App;
