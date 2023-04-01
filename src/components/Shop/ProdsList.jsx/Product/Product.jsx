import React from 'react'
import { useState } from 'react'
import { IconContext } from "react-icons";
import { MdAddShoppingCart } from 'react-icons/md'

const Product = ({img, title, price, stockAvailable}) => {
    const [ stock, setStock ] = useState(1)
    const [ error, setError ] = useState("")

    const addStock = () => {
        if(stock < stockAvailable){
            setStock(stock + 1)
            setError("")
        } else {
            setError("No hay más productos en stock")
        }
    }

    const removeStock = () => {
        if(stock > 1){
            setStock(stock - 1)
            setError("")
        }
    }

    return (
        <div className="prod">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p className="price">{price}</p>
                <div className="stock">
                    <div className="available">
                        {stockAvailable} ud. in stock
                    </div>
                    <div className="select-stock">
                        <button id="remove" onClick={removeStock}>-</button>
                        <span>{stock}</span>
                        <button id="add" onClick={addStock}>+</button>
                    </div>
                </div>
                {error.length > 0 && <span className="error">{error}</span>}
                <button id="add-to-cart">
                    Add to Cart
                    <IconContext.Provider value={{size: "16px", className: 'cart-icon'}}>
                        <MdAddShoppingCart />
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    )
}

export default Product
