import React from 'react'
import Item from './Item/Item'
import { useState, useEffect } from 'react'

const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(err => console.error(err))
        }, 2000);
    }, [])
        
    return (
        <div className='products'>
            {products.map(prod => {
                return (
                    <Item
                        prod={prod}
                        key={prod.id}
                    />
                )
            })}
        </div>
    )
}

export default ItemList
