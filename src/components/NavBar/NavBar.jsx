import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="header">
        <Link to="/">
          <Logo/>
        </Link>
        <Menu />
        <Link to="/cart">
          <CartWidget/>
        </Link>
    </header>
  )
}

export default NavBar
