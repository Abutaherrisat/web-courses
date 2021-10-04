import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Educational Website</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <Link class="nav-link items" aria-current="page"to="/home">Home</Link>
              <Link class="nav-link items" to="/courses">Courses</Link>
              <Link class="nav-link items" to="/about">About Us</Link>
              <Link class="nav-link items" to="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </nav>
      {/* <ul className="nav justify-content-start">
        <li className="nav-item">
          <Link className="items" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="items" to="/courses">Courses</Link>
        </li>
        <li className="nav-item">

          <Link className="items" to="/about">About us</Link>
        </li>
        <li className="nav-item">
          <Link className="items" to="/contact">Contact us</Link>
        </li>
      </ul> */}
    </div>

  );
};

export default Header;