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
          <div className="dropdown-group">
            <li>Categories</li>
            <div className="dropdown">
              <NavLink to="/category/necklaces" className={({ isActive }) => isActive ? "active" : ""}>
                <li>Necklaces</li>
              </NavLink>
              <NavLink to="/category/bracelets" className={({ isActive }) => isActive ? "active" : ""}>
                <li>Bracelets</li>
              </NavLink>
              <NavLink to="/category/wallets"  className={({ isActive }) => isActive ? "active" : ""}>
                <li>Wallets</li>
              </NavLink>
              <NavLink to="/category/other" className={({ isActive }) => isActive ? "active" : ""}>
                <li>Other</li>
              </NavLink>
            </div>
          </div>
        </ul>
    </nav>
  )
}

export default Menu
