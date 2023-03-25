import React from 'react';
import { IconContext } from "react-icons";
import { BsCart3 } from 'react-icons/bs';


const CartWidget = ({countItems}) => {
  console.log(countItems)
  return (
    <div className="cart" data-count={countItems}>
      <IconContext.Provider value={{ color: "white", size: "28px", className: "cartIcon"}}>
        <BsCart3 />
      </IconContext.Provider>
    </div>
  )
}

export default CartWidget
