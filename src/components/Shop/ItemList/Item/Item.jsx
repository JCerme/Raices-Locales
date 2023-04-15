import React from 'react'
import { CounterStock } from '../../../CounterStock/CounterStock'
import { Link } from 'react-router-dom'
import AddToCart from '../../../AddToCart/AddToCart';

const Product = ({prod}) => {
    console.log(prod)
    return (
        <Link to={`/products/${prod.id}`}>
            <div className="prod">
                <div className="image">
                    <img src={prod.image} alt="" />
                </div>
                <div className="content">
                    <h2>{prod.title}</h2>
                    <p className="price">
                        <span>{prod.price + '€'}</span>
                        <span>{Math.floor(prod.price * 1.5) + '€'}</span>
                    </p>
                    <div className="stock">
                        <div className="available">
                            {prod.rating.count} ud. in stock
                        </div>
                        <CounterStock prod={prod} />
                    </div>
                </div>
                <AddToCart prod={prod} />
            </div>
        </Link>
    )
}

export default Product
