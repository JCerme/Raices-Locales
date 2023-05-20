import React from 'react'
import { IconContext } from "react-icons";
import { MdAddShoppingCart } from 'react-icons/md'
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToCart = ({prod}) => {
  const { addToCart } = useContext(CartContext)
  const addItem = () => {
    addToCart(prod)
    toast.success(`${prod.quantity} ud. of "${prod.title}" succesfully added to cart!`);
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
        />

      <button id="add-to-cart" data-id={prod.id} onClick={(prod) => addItem(prod)}>
          Add to Cart
          <IconContext.Provider value={{size: "16px", className: 'cart-icon'}}>
              <MdAddShoppingCart />
          </IconContext.Provider>
      </button>
    </>
  )
}

export default AddToCart
