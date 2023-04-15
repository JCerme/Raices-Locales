import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CounterStock } from '../CounterStock/CounterStock'
import AddToCart from '../AddToCart/AddToCart'

const DetailedProd = () => {
    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+params.id)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='container detailed-product'>
            <div className="image">
                <img src={product.image} alt="" />
            </div>
            <div className="content">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <div className="price">
                    <span>{product.price + '€'}</span>
                    <span>{product.price * 1.5 + '€'}</span>
                </div>
                <div className="stock">
                    <CounterStock prod={product}/>
                    <p>Available stock: {product.rating?.count} ud.</p>
                </div>
                <AddToCart />
            </div>
        </div>
    )
}

export default DetailedProd
