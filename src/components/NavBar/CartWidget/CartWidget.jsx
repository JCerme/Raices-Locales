import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext'
import { IconContext } from "react-icons";
import { BsCart3 } from 'react-icons/bs';


const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <div className="cart" data-count={getQuantity()}>
      <IconContext.Provider value={{ color: "white", size: "28px", className: "cartIcon"}}>
        <BsCart3 />
      </IconContext.Provider>
    </div>
  )
}

export default CartWidget
