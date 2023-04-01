import React from 'react'
import Hero from './Hero/Hero'
import Filters from './Filters/Filters'
import ProdsList from './ProdsList.jsx/ProdsList'


const Shop = () => {
    const title = 'Enjoy our products!'

    return (
        <div id="shop">
            <Hero title={title}/>
            <div className='container'>
                <Filters />
                <ProdsList />
            </div>
        </div>
    )
}

export default Shop
