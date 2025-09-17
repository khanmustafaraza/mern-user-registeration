import React from "react";
import { FaCode, FaUsers, FaRocket } from "react-icons/fa";
import { useTheme } from "../store/theme";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          {/* Text Section */}
          <div className="col-md-7 mb-4">
            <h1 className="display-4 fw-bold">
              Welcome to <span className="text-warning">iCoder</span>
            </h1>
            <p className="lead mt-3">
              Learn to code, build projects, and take your skills to the next
              level with <strong>iCoder</strong>. Fast, modern, and
              developer-friendly.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <NavLink to="/contact" className="btn btn-warning btn-lg">
                Get Started
              </NavLink>
              <a href="#learn-more" className="btn  btn-danger btn-lg">
                Learn More
              </a>
            </div>

            {/* Features Section */}
            <div className="row mt-2 ">
              <div className="col-3 text-center border p-1 m-1">
                <FaCode size={40} className="text-warning mb-2" />
                <p className="fw-semibold">Practical Coding</p>
              </div>
              <div className="col-3 text-center border p-1 m-1">
                <FaUsers size={40} className="text-success mb-2" />
                <p className="fw-semibold">Community Support</p>
              </div>
              <div className="col-3 text-center border p-1 m-1">
                <FaRocket size={40} className="text-primary mb-2" />
                <p className="fw-semibold">Career Growth</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-5 text-center">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Coding Illustration"
              className="img-fluid rounded "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
