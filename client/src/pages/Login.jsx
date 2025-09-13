import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <>
    <Navbar/>
     <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-success">Login</button>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default Login

