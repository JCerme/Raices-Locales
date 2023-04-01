import React from 'react'
import SimpleSlider from './SimpleSlider/SimpleSlider'
import ItemListContainer from '../NavBar/ItemListContainer/ItemListContainer'

const HomeView = () => {
    const saludo = "¡Welcome to Raíces Locales! The best place to buy your favourites handmades products.";
    
    return (
        <>
        <ItemListContainer greeting={saludo} />
        <SimpleSlider />
        </>
    )
}

export default HomeView
