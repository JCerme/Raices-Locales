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
          <NavLink to="/products/category/jewerely" className={({ isActive }) => isActive ? "active" : ""}>
            <li>Jewerly</li>
          </NavLink>
          <NavLink to="/products/category/electronics" className={({ isActive }) => isActive ? "active" : ""}>
            <li>Electronics</li>
          </NavLink>
          <NavLink to={"/products/category/"+encodeURI("men's clothing")}  className={({ isActive }) => isActive ? "active" : ""}>
            <li>Men</li>
          </NavLink>
          <NavLink to={"/products/category/"+encodeURI("women's clothing")} className={({ isActive }) => isActive ? "active" : ""}>
            <li>Women</li>
          </NavLink>
        </ul>
    </nav>
  )
}

export default Menu
