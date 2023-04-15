import React from 'react'
import { IconContext } from "react-icons";
import { MdAddShoppingCart } from 'react-icons/md'

const AddToCart = (prod) => {
  return (
    <button id="add-to-cart" data-id={prod.id}>
        Add to Cart
        <IconContext.Provider value={{size: "16px", className: 'cart-icon'}}>
            <MdAddShoppingCart />
        </IconContext.Provider>
    </button>
  )
}

export default AddToCart
