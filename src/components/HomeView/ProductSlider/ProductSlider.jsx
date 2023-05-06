import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Item from "../../Shop/ItemList/Item/Item";
import { db } from "../../../firebase/config";

export default function ProductSlider() {
    const  [ products, setProducts ] = useState([])
    useEffect(() => {
        db().collection('products').where('stock', '<', 15).get()
            .then((res) => {
                const prods = res.docs.map((doc) => {
                    return {id:doc.id, ...doc.data(), quantity: 1}
                })
                setProducts(prods)
            })
            .catch(err => console.error(err))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <>
            <h2 className="lasts-h2">Últimas unidades:</h2>
            <Slider {...settings} className="product-slides">
                { products.map((product) => <Item key={product.id} prod={product}/>) }
            </Slider>
        </>
    );
}