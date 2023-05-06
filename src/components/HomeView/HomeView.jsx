import React from 'react'
import SimpleSlider from './SimpleSlider/SimpleSlider'
import Cta from './CTA/Cta'
import ProductSlider from './ProductSlider/ProductSlider';

const HomeView = () => {
    const greeting = "¡Welcome to Raíces Locales! The best place to buy your favourites handmades products.";
    
    return (
        <>
        <SimpleSlider />
        <ProductSlider/>
        <Cta greeting={greeting} />
        </>
    )
}

export default HomeView
