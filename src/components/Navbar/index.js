import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        DelayDollar
      </Link>
      <button className="hamburger"></button>
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/passenger-rights" className="nav-link">
              Passenger Rights
            </Link>
          </li>
          <li>
            <Link to="/terms-and-conditions" className="nav-link">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
