import React from 'react'
import Item from './Item/Item'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemList = () => {
    const params = useParams();

    let url;
    if (params.categoryId){
        url = 'https://fakestoreapi.com/products/category/' + params.categoryId;
    } else {
        url = 'https://fakestoreapi.com/products';
    }
    
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const [currentUrl, setCurrentUrl] = useState(url);

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                    setCurrentUrl(url);
                })
                .catch(err => console.error(err))
                .finally(setLoader(false));
        }, 2000);
    }, [url]);
    
        
    if (!loader) {
        if (currentUrl === url && products.length > 0) {
            return (
                <div className="products">
                    {products.map(prod => {
                        return <Item prod={prod} key={prod.id} />;
                    })}
                </div>
            );
        } else {
            return "[ ! ] There is no data...";
        }
    } else {
        return (
            <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
        )
    }
}

export default ItemList
