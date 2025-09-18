import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../store/auth";

const Contact = () => {
  const { getTokenVerify, user } = useAuth();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Verify token and fetch user data on mount
  useEffect(() => {
    getTokenVerify();
  }, []);

  // ✅ Update form fields when user changes
  useEffect(() => {
    if (user?.username && user?.email) {
      setUserData((prev) => ({
        ...prev,
        name: user.username,
        email: user.email,
      }));
    }
  }, [user]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userData);
    const res = await fetch(
      "http://localhost:5000/api/contact/create-new-contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    const data = await res.json();
    console.log(data);
    // console.log("Message Sent:", userData);
    // send to backend here...
    setUserData({ ...userData, message: "" }); // clear message after submit
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <h2 className="fw-bold text-primary mb-4">Get in Touch</h2>
            <p className="">
              Have questions, feedback, or collaboration ideas? Fill out the
              form below and we’ll get back to you as soon as possible.
            </p>

            <form className="p-4 rounded bg-light" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your name"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  disabled={!!user.username} // disable if logged in
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  disabled={!!user.email} // disable if logged in
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  name="message"
                  value={userData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-info text-white w-100">
                Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
              alt="Contact illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
