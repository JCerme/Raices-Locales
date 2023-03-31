import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
        <ul>
          <NavLink to="/home"><li>Home</li></NavLink>
          <NavLink to="/shop"><li>Shop</li></NavLink>
          <NavLink to="/about-us"><li>About Us</li></NavLink>
          <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>
    </nav>
  )
}

export default Menu
