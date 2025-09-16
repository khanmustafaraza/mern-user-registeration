import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setTokenInLS, setToken } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        alert("✅ Login successfully!");
        setToken(data.token);
        setTokenInLS(data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow border-0 rounded-4 p-4"
          style={{ maxWidth: "450px", width: "100%" }}
        >
          {/* Title */}
          <h2 className="text-center fw-bold mb-4 text-dark">
            Welcome Back 👋
          </h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="row g-3">
            {/* Email */}
            <div className="col-12">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaEnvelope className="text-secondary" />
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  required
                  value={user.email}
                  name="email"
                  onChange={handleLoginChange}
                />
              </div>
            </div>

            {/* Password */}
            <div className="col-12">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaLock className="text-secondary" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  required
                  value={user.password}
                  name="password"
                  onChange={handleLoginChange}
                />
                <span
                  className="input-group-text bg-white"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-secondary" />
                  ) : (
                    <FaEye className="text-secondary" />
                  )}
                </span>
              </div>
            </div>

            {/* Login Button */}
            <div className="col-12">
              <button
                type="submit"
                className="btn w-100 text-white fw-semibold shadow"
                style={{
                  background:
                    "linear-gradient(90deg, #667eea, #764ba2, #f5576c)",
                }}
              >
                🔑 Login
              </button>
            </div>
          </form>

          {/* Forgot Password */}
          <p className="text-center mt-3 mb-0">
            <a
              href="#"
              className="text-decoration-none text-primary fw-semibold"
            >
              Forgot Password?
            </a>
          </p>

          {/* Register Redirect */}
          <p className="text-center mt-2">
            Don’t have an account?{" "}
            <span
              className="text-primary fw-semibold"
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "/register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
