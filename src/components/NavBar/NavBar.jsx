import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import CartWidget from './CartWidget/CartWidget'

const NavBar = () => {
  let items = 2;
  return (
    <header className="header">
        <Logo/>
        <Menu />
        <CartWidget countItems={items}/>
    </header>
  )
}

export default NavBar
