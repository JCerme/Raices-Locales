import React from 'react'
import NavBar from '../NavBar/NavBar'
import SimpleSlider from './SimpleSlider/SimpleSlider'
import ItemListContainer from '../NavBar/ItemListContainer/ItemListContainer'

const HomeView = () => {
    const saludo = "¡Welcome to Raíces Locales! The best place to buy your favourites handmades products.";
    
    return (
        <>
        <NavBar />
        <ItemListContainer greeting={saludo} />
        <SimpleSlider />
        </>
    )
}

export default HomeView
