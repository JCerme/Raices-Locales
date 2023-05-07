import React from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { CounterStock } from '../../CounterStock/CounterStock'
import { useContext } from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs';

const Summary = () => {
    const { getCart, getQuantity, getTotalQuantity, removeFromCart } = useContext(CartContext)
    return (
        <div className="products">
            <h1>You have {getTotalQuantity()} ud. in {getQuantity()} items.</h1>
            {getCart().map((prod) => (
                <div className="prod" key={prod.id}>
                    <div className="image">
                        <img src={prod.image} alt="" />
                    </div>
                    <div className="content">
                        <h1>{prod.title}</h1>
                        <div className="price">
                            {prod.sale_price && <span>{prod.sale_price + '€'}</span>}
                            <span>{prod.price + '€'}</span>
                        </div>
                        <div className="stock">
                            <CounterStock prod={prod} max={prod.stock}/>
                            <p>Available stock: {prod.stock} ud.</p>
                        </div>
                        <div className="delete" onClick={() => removeFromCart(prod)}>
                            <BsFillTrash3Fill/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Summary
