import React from 'react'
import { Link } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='greeting'>
      <h1>{greeting}</h1>
      <div className="buttons">
        <Link to="/contact">
          <button id="contact">Contact Us</button>
        </Link>
        <Link to="/shop">
          <button id="shop">Visit the Shop</button>
        </Link>
      </div>
    </div>
  )
}

export default ItemListContainer
