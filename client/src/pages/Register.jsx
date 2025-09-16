import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        alert("✅ Account created successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient"
        style={{
          background: "linear-gradient(90deg, #667eea, #764ba2, #f5576c)",
        }}
      >
        <div
          className="card shadow border-0 rounded-4 p-4"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          {/* Title */}
          <h2 className="text-center fw-bold mb-4 text-dark">
            Create Your Account
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="row g-3">
            {/* Username */}
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaUser className="text-secondary" />
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={user.username}
                  onChange={handleRegisterChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FaEnvelope className="text-secondary" />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={user.email}
                  onChange={handleRegisterChange}
                  className="form-control"
                  required
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
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleRegisterChange}
                  className="form-control"
                  required
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

            {/* Register Button */}
            <div className="col-12">
              <button
                type="submit"
                className="btn w-100 text-white fw-semibold shadow"
                style={{
                  background:
                    "linear-gradient(90deg, #667eea, #764ba2, #f5576c)",
                }}
              >
                🚀 Register Now
              </button>
            </div>
          </form>

          {/* Terms */}
          <p className="text-center small text-muted mt-3 mb-0">
            By registering, you agree to our{" "}
            <a
              href="#"
              className="text-decoration-none fw-semibold text-primary"
            >
              Terms
            </a>{" "}
            &{" "}
            <a
              href="#"
              className="text-decoration-none fw-semibold text-primary"
            >
              Privacy Policy
            </a>
            .
          </p>

          {/* Login Redirect */}
          <p className="text-center mt-2">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-primary fw-semibold"
              style={{ cursor: "pointer" }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
