import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='greeting'>
      <h1>{greeting}</h1>
      <div className="buttons">
        <button id="contact">Contact Us</button>
        <button id="shop">Visit the Shop</button>
      </div>
    </div>
  )
}

export default ItemListContainer
