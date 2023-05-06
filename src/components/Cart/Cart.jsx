import React from 'react'
import Summary from './Summary/Summary'
import Totals from './Totals/Totals'

const Cart = () => {
    return (
        <div id='cart'>
            <div className="hero">
                <h1>Welcome to your cart</h1>
            </div>
            <div className="details container">
                <Summary/>
                <Totals/>
            </div>
        </div>
    )
}

export default Cart
