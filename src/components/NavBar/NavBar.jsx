import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import CartWidget from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  let items = 2;
  return (
    <header className="header">
        <Link to="/">
          <Logo/>
        </Link>
        <Menu />
        <Link to="/shop">
          <CartWidget countItems={items}/>
        </Link>
    </header>
  )
}

export default NavBar
