import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../store/theme";

const Navbar = () => {
  const { token } = useAuth();
  const { toggleTheme, theme } = useTheme();

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        theme ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } shadow-sm`}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          iCoder
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            {/* Auth Buttons */}
            {token ? (
              <li className="nav-item">
                <NavLink className="btn btn-danger ms-lg-3" to="/logout">
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item mx-1">
                  <NavLink
                    className="px-4 py-2 bg-primary text-white text-decoration-none rounded-1"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item my-md-4 my-sm-4 my-4 my-lg-0">
                  <NavLink
                    className="px-4 py-2 bg-secondary text-white text-decoration-none rounded-1"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}

            {/* Dark Mode Toggle */}
            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-outline-secondary d-flex align-items-center gap-2"
                onClick={toggleTheme}
              >
                {theme ? <FaSun /> : <FaMoon />}
                {theme ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
