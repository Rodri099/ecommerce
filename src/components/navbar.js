import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Tienda de videojuegos</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    );
  }

export default NavBar;