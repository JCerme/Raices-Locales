import React from 'react'
import Hero from './Hero/Hero'
import Filters from './Filters/Filters'
import ItemList from './ItemList/ItemList'


const Shop = () => {
    const title = 'Enjoy our products!'

    return (
        <div id="shop">
            <Hero title={title}/>
            <div className='container'>
                <Filters />
                <ItemList />
            </div>
        </div>
    )
}

export default Shop
