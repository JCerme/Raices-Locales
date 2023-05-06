import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

const Totals = () => {
    const { totalPrice } = useContext(CartContext);
    return (
        <div className='totals'>
            <div className="subtotal">
                <p>Subtotal:</p>
                <span>{(totalPrice()).toFixed()}€</span>
            </div>
            <div className="iva">
                <p>IVA:</p>
                <span>{(totalPrice() * 0.21).toFixed()}€</span>
            </div>
            <div className="shipping">
                <p>Shipping:</p>
                <span>Free</span>
            </div>
            <div className="total">
                <p>Total:</p>
                <span>{(totalPrice() * 1.21).toFixed()}€</span>
            </div>
            <button>Go to Payment</button>
        </div>
    )
}

export default Totals
