import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">
          {/* About iCoder */}
          <div className="col-md-4 mb-3">
            <h5>iCoder</h5>
            <p>
              iCoder is your go-to platform for modern web development
              tutorials, coding projects, and more. Learn. Build. Grow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              {/* <li><a href="/register" className="text-white text-decoration-none">Register</a></li>
              <li><a href="/login" className="text-white text-decoration-none">Login</a></li> */}
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@icoder.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Location: San Francisco, CA</p>
          </div>
        </div>

        <hr className="bg-light" />

        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} iCoder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
