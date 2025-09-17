import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import Dashboard from "./pages/admin/Dashboard";
import AdminRoute from "./routes/AdminRoute";
import User from "./pages/admin/User";
import Contacts from "./pages/admin/Contacts";

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

      {/* start of  admin routes  */}
      <Route path="/admin" element={<AdminRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<User />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
