import React from 'react'
import { useState } from 'react'

export const CounterStock = ({prod}) => {
    const [ stock, setStock ] = useState(1)
    const [ error, setError ] = useState("")

    const addStock = () => {
        if(stock < prod.rating.count){
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