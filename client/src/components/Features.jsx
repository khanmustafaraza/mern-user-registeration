import React from "react";
import { FaLaptopCode, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { useTheme } from "../store/theme";

const Features = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          Why Choose <span className="text-warning">iCoder</span>?
        </h2>
        <p className="text-muted">
          Everything you need to become a modern developer in one platform.
        </p>
      </div>
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm border-0 p-4 h-100">
            <FaLaptopCode size={40} className="text-primary mb-3" />
            <h5 className="fw-bold">Hands-On Coding</h5>
            <p className="text-muted">
              Learn by building real-world projects with step-by-step guidance.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm border-0 p-4 h-100">
            <FaBook size={40} className="text-success mb-3" />
            <h5 className="fw-bold">Rich Resources</h5>
            <p className="text-muted">
              Access tutorials, notes, and articles on the latest tech trends.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm border-0 p-4 h-100">
            <FaChalkboardTeacher size={40} className="text-danger mb-3" />
            <h5 className="fw-bold">Expert Mentorship</h5>
            <p className="text-muted">
              Learn from industry experts with years of teaching experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
