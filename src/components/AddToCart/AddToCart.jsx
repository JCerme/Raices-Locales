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
    notify(prod.title, prod.quantity)
  }

  const notify = (title, qty) => toast.success(`${qty} ud. of "${title}" succesfully added to cart!`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />

      <button id="add-to-cart" data-id={prod.id} onClick={addItem}>
          Add to Cart
          <IconContext.Provider value={{size: "16px", className: 'cart-icon'}}>
              <MdAddShoppingCart />
          </IconContext.Provider>
      </button>
    </>
  )
}

export default AddToCart
