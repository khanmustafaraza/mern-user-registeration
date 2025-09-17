import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-light shadow-sm p-2 mb-3">
      {/* Left Side */}
      <h5 className="fw-bold text-primary m-0">iCoder Admin Panel</h5>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-outline-secondary btn-sm rounded-circle">
          <FaBell />
        </button>
        <div className="d-flex align-items-center gap-2">
          <FaUserCircle size={28} className="text-primary" />
          <span className="fw-semibold">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
