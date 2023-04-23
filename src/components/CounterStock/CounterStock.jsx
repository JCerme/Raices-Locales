import React from 'react'
import { useState } from 'react'

export const CounterStock = ({prod, max}) => {
    const [ stock, setStock ] = useState(prod.quantity)
    const [ error, setError ] = useState("")

    const addStock = () => {
        if(stock < max){
            setStock(stock + 1)
            setError("")
            prod.quantity = stock + 1;
        } else {
            setError("No hay más productos en stock")
        }
    }

    const removeStock = () => {
        if(stock > 1){
            setStock(stock - 1)
            setError("")
            prod.quantity = stock - 1;
        }
    }
    
    return (
        <>
            <div className="select-stock">
                <button id="remove" onClick={removeStock}>-</button>
                <span>{stock}</span>
                <button id="add" onClick={addStock}>+</button>
            </div>
            {error.length > 0 && <span className="error">{error}</span>}
        </>
    )
}