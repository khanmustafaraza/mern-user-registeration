import React from "react";
import { FaCode, FaUsers, FaRocket } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 mb-4">
            <h1 className="display-4 fw-bold">
              Welcome to <span className="text-warning">iCoder</span>
            </h1>
            <p className="lead mt-3 text-muted">
              Learn to code, build projects, and take your skills to the next
              level with <strong>iCoder</strong>. Fast, modern, and
              developer-friendly.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#get-started" className="btn btn-warning btn-lg">
                Get Started
              </a>
              <a href="#learn-more" className="btn btn-outline-dark btn-lg">
                Learn More
              </a>
            </div>

            {/* Features Section */}
            <div className="row mt-5">
              <div className="col-4 text-center border">
                <FaCode size={40} className="text-warning mb-2" />
                <p className="fw-semibold">Practical Coding</p>
              </div>
              <div className="col-4 text-center border">
                <FaUsers size={40} className="text-success mb-2" />
                <p className="fw-semibold">Community Support</p>
              </div>
              <div className="col-4 text-center border">
                <FaRocket size={40} className="text-primary mb-2" />
                <p className="fw-semibold">Career Growth</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
