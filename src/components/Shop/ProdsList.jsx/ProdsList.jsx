import React from 'react'
import Product from './Product/Product'

const ProdsList = () => {
    return (
        <div className='products'>
            <Product
                img='/media/products/Default_Handmade_jewerly_with_a_dark_background_High_quality_a_0_772799d0-913f-4de6-9ea3-50b09fe8ab17_1.jpg'
                title='Product 1'
                price='50€'
                stockAvailable='3'
            />
            <Product
                img='/media/products/Default_Floating_Handmade_brazalet_with_a_dark_background_High_1_77359de1-7c24-4517-8d39-4866cbfca55b_1.jpg'
                title='Product 2'
                price='120€'
                stockAvailable='6'
            />
            <Product
                img='/media/products/Default_Floating_Handmade_brazalet_with_a_dark_background_High_1_77359de1-7c24-4517-8d39-4866cbfca55b_1.jpg'
                title='Product 2'
                price='120€'
                stockAvailable='6'
            />
            <Product
                img='/media/products/Default_Floating_Handmade_brazalet_with_a_dark_background_High_1_77359de1-7c24-4517-8d39-4866cbfca55b_1.jpg'
                title='Product 2'
                price='120€'
                stockAvailable='6'
            />
            <Product
                img='/media/products/Default_Floating_Handmade_brazalet_with_a_dark_background_High_1_77359de1-7c24-4517-8d39-4866cbfca55b_1.jpg'
                title='Product 2'
                price='120€'
                stockAvailable='6'
            />
        </div>
    )
}

export default ProdsList
