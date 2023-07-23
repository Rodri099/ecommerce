// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Tienda De videoJuegos
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/category/xbox">Xbox Games</Link>
          </li>
          <li>
            <Link to="/category/pc">PC Games</Link>
          </li>
        </ul>
        {/* Otros elementos del NavBar */}
      </div>
    </nav>
  );
};

export default NavBar;

