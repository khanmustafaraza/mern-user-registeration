import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => {
  return (
   <>
   <Navbar/>
    <div className="container mt-5">
      <h2 className="mb-4">Register</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter username" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
    <Footer/>
   </>
  );
};

export default Register;
