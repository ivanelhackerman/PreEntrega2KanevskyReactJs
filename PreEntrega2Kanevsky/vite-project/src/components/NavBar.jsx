import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">That Healthy Flow</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/category/nutrition">Nutrition</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/physical">Physical Wellbeing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/mental">Mental Wellbeing</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
