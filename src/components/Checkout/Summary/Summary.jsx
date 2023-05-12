import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

export const Summary = () => {
    const { getCart, totalPrice, totalPriceIVA } = useContext(CartContext)

    return (
        <>
            <h2>Your order</h2>
            {getCart().map(item => (
                <div className="item" key={item.id}>
                    <span>{`${item.title} x${item.quantity}`}</span>
                    <span>{((item.sale_price || item.price) * item.quantity).toFixed(2)}€</span>
                </div>
            ))}
            <div className="item subtotal">
                <span>Subtotal:</span>
                <span>{totalPrice()}€</span>
            </div>
            <div className="total">
                <h2>Total:</h2>
                <h3>{totalPriceIVA()}€</h3>
            </div>
        </>
    )
}
