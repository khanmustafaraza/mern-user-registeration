import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaEnvelope } from "react-icons/fa";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 text-center">
      <div
        className="card shadow border-0 rounded-4 p-5"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        {/* Error Code */}
        <h1 className="display-1 fw-bold text-danger">404</h1>

        {/* Message */}
        <h2 className="fw-bold text-dark mb-3">Oops! Page Not Found</h2>
        <p className="text-muted mb-4">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="d-flex gap-3 justify-content-center">
          <button
            className="btn btn-primary d-flex align-items-center gap-2"
            onClick={() => navigate("/")}
          >
            <FaHome /> Go Home
          </button>

          <button
            className="btn btn-outline-dark d-flex align-items-center gap-2"
            onClick={() => navigate("/contact")}
          >
            <FaEnvelope /> Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
