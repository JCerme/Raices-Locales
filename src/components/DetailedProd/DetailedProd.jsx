import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CounterStock } from '../CounterStock/CounterStock';
import AddToCart from '../AddToCart/AddToCart';
import { db } from '../../firebase/config';
import Error from '../Error/Error'

const DetailedProd = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        db().collection('products').doc(id).get()
            .then((doc) => {
                if (doc.exists) {
                    const prod = { id: doc.id, ...doc.data(), quantity: 1 };
                    setProduct(prod);
                } else {
                    console.log("No such document!");
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);

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
