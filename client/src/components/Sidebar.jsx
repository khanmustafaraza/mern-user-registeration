import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sideBarData = [
    {
      id: 0,
      icon: "dashboard",
      name: "Dashboard",
      link: "/admin/dashboard",
    },
    {
      id: 1,
      icon: "group",
      name: "Users",
      link: "/admin/users",
    },
    {
      id: 2,
      icon: "call",
      name: "Contact",
      link: "/admin/contacts",
    },
    // {
    //   id: 3,
    //   icon: "build",
    //   name: "Services",
    //   link: "/admin/services",
    // },
  ];

  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 sidebar-wrapper vh-100 d-flex flex-column p-1">
      {/* Logo / Brand */}
      <div className="sidebar-header text-center mb-4">
        <div>
          <h6 className="fw-bold text-secondary">iCoder-Admin Panel</h6>
          <small className="text-muted"></small>
        </div>
      </div>

      {/* Links */}
      <div className="sidebar-container d-flex flex-column gap-2">
        {sideBarData?.map((curEle) => {
          return (
            <NavLink
              key={curEle.id}
              to={curEle.link}
              className={({ isActive }) =>
                `d-flex align-items-center gap-2 p-2 rounded sidebar-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              <span className="material-symbols-outlined fs-5 text-danger fw-medium">
                {curEle.icon}
              </span>
              <span className="fw-semibold">{curEle.name}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Styles */}
      <style>{`
        .sidebar-wrapper {
          background: #ffffff;
          border-right: 1px solid #e9ecef;
          box-shadow: 2px 0 6px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
        }
        .sidebar-header h4 {
          margin-bottom: 0;
        }
        .sidebar-link {
          color: #495057;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .sidebar-link:hover {
          background: #f1f3f5;
          color: #0d6efd !important;
          transform: translateX(3px);
        }
        .sidebar-link.active {
          background: #e7f1ff;
          color: #0d6efd !important;
          font-weight: 600;
          box-shadow: inset 2px 0 0 #0d6efd;
        }
        .material-symbols-outlined {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
