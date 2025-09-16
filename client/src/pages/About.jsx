import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaCode,
  FaUsers,
  FaLightbulb,
  FaLaptopCode,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
  };

  return (
    <>
      <Navbar />

      {/* Dark Mode Toggle */}
      <div className="container text-end mt-3">
        <button
          className="btn btn-outline-secondary d-flex align-items-center gap-2 ms-auto"
          onClick={toggleTheme}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Hero Section */}
      <div
        className={`container my-5 ${darkMode ? "text-light" : "text-dark"}`}
      >
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 mb-4">
            <h1
              className={`fw-bold mb-3 ${
                darkMode ? "text-info" : "text-primary"
              }`}
            >
              About iCoder
            </h1>
            <p className="text-muted">
              Welcome to <strong>iCoder</strong>, your go-to platform for
              learning, exploring, and mastering the world of coding. Our
              mission is to empower developers, students, and tech enthusiasts
              with high-quality tutorials, articles, and resources on modern
              programming languages and technologies.
            </p>
            <p className="text-muted">
              At iCoder, we believe coding should be accessible to everyone.
              Whether you're just starting out or sharpening your advanced
              skills, we provide structured, beginner-friendly content with
              real-world examples to help you succeed.
            </p>
            <button className="btn btn-primary mt-2">Learn More</button>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
              alt="iCoder illustration"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container my-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Our Mission & Vision</h2>
          <p className="text-muted">
            We aim to bridge the gap between learners and technology by
            providing high-quality, easy-to-understand coding resources.
          </p>
        </div>
        <div className="row text-center">
          <div className="col-md-6 mb-3">
            <div
              className={`card shadow-sm p-4 border-0 h-100 ${
                darkMode ? "bg-secondary text-light" : ""
              }`}
            >
              <FaLightbulb size={40} className="text-warning mb-3" />
              <h5 className="fw-bold">Our Mission</h5>
              <p className="text-muted">
                To make coding education accessible, affordable, and engaging
                for everyone around the globe.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div
              className={`card shadow-sm p-4 border-0 h-100 ${
                darkMode ? "bg-secondary text-light" : ""
              }`}
            >
              <FaLaptopCode size={40} className="text-primary mb-3" />
              <h5 className="fw-bold">Our Vision</h5>
              <p className="text-muted">
                To build a community of skilled programmers and innovators
                shaping the future with technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose iCoder */}
      <div className="container my-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Why Choose iCoder?</h2>
        </div>
        <div className="row text-center">
          {[
            {
              icon: <FaCode size={35} className="text-primary mb-3" />,
              title: "Practical Learning",
              desc: "Hands-on examples and projects that help you apply what you learn.",
            },
            {
              icon: <FaUsers size={35} className="text-success mb-3" />,
              title: "Community Support",
              desc: "Join a vibrant community of learners and mentors who support each other.",
            },
            {
              icon: <FaLaptopCode size={35} className="text-danger mb-3" />,
              title: "Latest Tech",
              desc: "Stay updated with modern programming languages, tools, and frameworks.",
            },
          ].map((card, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div
                className={`card shadow-sm p-4 border-0 h-100 ${
                  darkMode ? "bg-secondary text-light" : ""
                }`}
              >
                {card.icon}
                <h5 className="fw-bold">{card.title}</h5>
                <p className="text-muted">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div className="container my-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Meet the Team</h2>
        </div>
        <div className="row text-center">
          {[
            {
              name: "Mustafa Raza Khan",
              role: "Founder & Lead Instructor",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Ayesha Khan",
              role: "Content Strategist",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Rahul Sharma",
              role: "Full Stack Developer",
              img: "https://randomuser.me/api/portraits/men/56.jpg",
            },
          ].map((member, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div
                className={`card shadow-sm border-0 h-100 ${
                  darkMode ? "bg-secondary text-light" : ""
                }`}
              >
                <img
                  src={member.img}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                  alt={member.name}
                />
                <div className="card-body">
                  <h5 className="fw-bold">{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
