import React from "react";
import Adminlayout from "../../layout/Adminlayout";
import { FaUsers, FaChartLine, FaDatabase, FaEnvelope } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Adminlayout>
      <div className="container-fluid py-4">
        {/* Page Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Admin Dashboard</h2>
          <button className="btn btn-primary">Generate Report</button>
        </div>

        {/* Stats Cards */}
        <div className="row g-3">
          <div className="col-md-3">
            <div className="card shadow-sm border-0 p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold">Users</h5>
                  <p className="text-muted mb-0">1,250</p>
                </div>
                <FaUsers size={30} className="text-primary" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm border-0 p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold">Visits</h5>
                  <p className="text-muted mb-0">12.4K</p>
                </div>
                <FaChartLine size={30} className="text-success" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm border-0 p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold">Database</h5>
                  <p className="text-muted mb-0">3.6 GB</p>
                </div>
                <FaDatabase size={30} className="text-warning" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm border-0 p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold">Messages</h5>
                  <p className="text-muted mb-0">87</p>
                </div>
                <FaEnvelope size={30} className="text-danger" />
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="row g-3 mt-4">
          <div className="col-md-8">
            <div className="card shadow-sm border-0 p-3">
              <h5 className="fw-bold mb-3">Traffic Overview</h5>
              <div className="text-center text-muted py-5">
                {/* Chart Placeholder */}
                📊 Chart will be integrated here
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-3">
              <h5 className="fw-bold mb-3">Recent Activities</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">New user registered</li>
                <li className="list-group-item">Service updated</li>
                <li className="list-group-item">Contact form received</li>
                <li className="list-group-item">Database backup completed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Adminlayout>
  );
};

export default Dashboard;
