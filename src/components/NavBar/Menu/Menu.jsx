import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
        <ul>
          <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "active" : ""}>
            <li>Shop</li>
          </NavLink>
          <NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>
            <li>About Us</li>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            <li>Contact</li>
          </NavLink>
        </ul>
    </nav>
  )
}

export default Menu
