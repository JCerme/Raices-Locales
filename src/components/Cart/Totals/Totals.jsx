import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { Link } from 'react-router-dom';

const Totals = () => {
    const { totalPrice, totalPriceIVA } = useContext(CartContext);
    return (
        <div className='totals'>
            <div className="subtotal">
                <p>Subtotal:</p>
                <span>{(totalPrice()) || 0}€</span>
            </div>
            <div className="iva">
                <p>IVA:</p>
                <span>{(totalPrice() * 0.21).toFixed(2) || 0}€</span>
            </div>
            <div className="shipping">
                <p>Shipping:</p>
                <span>Free</span>
            </div>
            <div className="total">
                <p>Total:</p>
                <span>{totalPriceIVA() || 0}€</span>
            </div>
            <Link to="/checkout">
                <button>Go to Payment</button>
            </Link>
        </div>
    )
}

export default Totals
