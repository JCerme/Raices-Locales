import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CounterStock } from '../CounterStock/CounterStock';
import AddToCart from '../AddToCart/AddToCart';
import { db } from '../../firebase/config';
import Error from '../Error/Error'

const DetailedProd = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db().collection('products').doc(id).get()
            .then((doc) => {
                if (doc.exists) {
                    const prod = { id: doc.id, ...doc.data(), quantity: 1 };
                    setProduct(prod);
                    setLoading(false);
                } else {
                    console.log("No such document!");
                }
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            })
    }, [id]);

    if(loading){
        return (
            <div className="loader-box">
                <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
            </div>
        )
    }

    return (
        product
        ? (
            <div className='container detailed-product'>
                <div className="image">
                    <img src={product.image} alt="" />
                </div>
                <div className="content">
                    <h1>{product.title}</h1>
                    <p>{product.description.split("<br>").join("")}</p>
                    <div className="price">
                        {product.sale_price && <span>{product.sale_price + '€'}</span>}
                        <span>{product.price + '€'}</span>
                    </div>
                    <div className="stock">
                        <CounterStock prod={product} max={product.stock} />
                        <p>Available stock: {product.stock} ud.</p>
                    </div>
                    <AddToCart prod={product} />
                </div>
            </div>
        ) : (
            <Error message={'El producto ' + id + ' no existe.'}/>
        )
    )
}

export default DetailedProd;
