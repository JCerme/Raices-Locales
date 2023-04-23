import React from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CounterStock } from '../CounterStock/CounterStock'
import { useContext } from 'react'

const Cart = () => {
    const { getCart } = useContext(CartContext)
    return (
        <div id='cart'>
            <div className="hero">
                <h1>This is your cart</h1>
            </div>
            <div className="products container">
                {getCart().map((prod) => (
                    <div className="prod" key={prod.id}>
                        <div className="image">
                            <img src={prod.image} alt="" />
                        </div>
                        <div className="content">
                            <h1>{prod.title}</h1>
                            <div className="price">
                                <span>{prod.price + '€'}</span>
                                <span>{prod.price * 1.5 + '€'}</span>
                            </div>
                            <div className="stock">
                                <CounterStock prod={prod} max={Math.floor(prod.rating?.count / 10)}/>
                                <p>Available stock: {Math.floor(prod.rating?.count / 10)} ud.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart
