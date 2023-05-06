import React from 'react'
import { CounterStock } from '../../../CounterStock/CounterStock'
import { Link } from 'react-router-dom'
import AddToCart from '../../../AddToCart/AddToCart';

const Product = ({prod}) => {
    return (
        <div className="prod">
            <Link to={`/products/${prod.id}`}>
                <div className="image">
                    <img src={prod.image} alt="" />
                </div>
            </Link>
            <div className="content">
                <Link to={`/products/${prod.id}`}>
                    <h2>{prod.title}</h2>
                </Link>
                <p className="price">
                    {prod.sale_price && <span>{prod.sale_price.toFixed(2) + '€'}</span>}
                    <span>{prod.price.toFixed(2) + '€'}</span>
                </p>
                <div className="stock">
                    <div className="available">
                        {prod.stock} ud. in stock
                    </div>
                    <CounterStock prod={prod} max={prod.stock} />
                </div>
            </div>
            <AddToCart prod={prod}/>
        </div>
    )
}

export default Product
