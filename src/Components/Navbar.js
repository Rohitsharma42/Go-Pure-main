import React from 'react';
import sitelogo from '../images/gopure_logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-5">
            <div className="topbar-left">
              <div className="topbar-social-icons">
                <a href="https://www.facebook.com/GoPureIndia" target="new">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/gopureindia" target="new">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://twitter.com/gopureindia" target="new">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
              <p>Welcome to Go Pure - Real, Elegant, Authentic Taste of India</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-7">
            <div className="topbar-right">
              <p title="9910125804">Customer care will be open 24/7 <a href="tel:9910125804" className="company-phone"><i className="bi bi-telephone-fill"></i>+91 9910125804</a></p>
              <a href="/" className="company-timing"><i className="bi bi-clock"></i>10.00 am to 6.00 pm - (Monday to Friday)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <header className="main-header">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src={sitelogo} className="img-fluid logo" alt='Logo'/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
            aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/team">Our Team</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
    </>
  )
}

export default Navbar
