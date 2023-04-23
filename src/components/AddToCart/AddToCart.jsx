import React from 'react'
import { IconContext } from "react-icons";
import { MdAddShoppingCart } from 'react-icons/md'
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

const AddToCart = ({prod}) => {
  const { addToCart } = useContext(CartContext)
  const addItem = () => addToCart(prod)

  return (
    <button id="add-to-cart" data-id={prod.id} onClick={addItem}>
        Add to Cart
        <IconContext.Provider value={{size: "16px", className: 'cart-icon'}}>
            <MdAddShoppingCart />
        </IconContext.Provider>
    </button>
  )
}

export default AddToCart
