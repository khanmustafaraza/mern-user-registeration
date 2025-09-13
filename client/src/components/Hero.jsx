import React from 'react';

const Hero = () => {
  return (
    <div className="container-fluid  py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">Welcome to <span className="text-warning">iCoder</span></h1>
            <p className="lead mt-3">
              Learn to code, build projects, and take your skills to the next level with iCoder. Fast, modern, and developer-friendly.
            </p>
            <a href="#get-started" className="btn btn-warning btn-lg mt-4">
              Get Started
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Coding Illustration"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
