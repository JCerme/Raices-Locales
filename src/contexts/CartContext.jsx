import { useState, createContext } from 'react'
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    if(!localStorage.getItem("cart")){
        localStorage.setItem('cart', '[]');
    }

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
 
    const addToCart = (product) => {
        const data = JSON.parse(localStorage.getItem("cart"));
        let exist = false;
        for (const item of data) {
            if(item.id === product.id) {
                item.quantity = item.quantity + product.quantity;
                exist = true;
            }
        }
        if(!exist) data.push(product);

        setCart(data)
        localStorage.setItem('cart', JSON.stringify(data));
    }

    const removeFromCart = (product) => {
        let data = JSON.parse(localStorage.getItem("cart"));
        data = data.filter(item => item.id !== product.id);

        setCart(data)
        localStorage.setItem('cart', JSON.stringify(data));
    }

    const getCart = () => {
        return cart;
    };

    const getQuantity = () => {
        return cart.length;
    }

    const getTotalQuantity = () => {
        return cart.reduce((acco, product) => acco += (product.quantity), 0)
    }

    const totalPrice = () => {
        return (cart.reduce((acco, product) => acco += ((product.sale_price || product.price) * product.quantity), 0)).toFixed(2)
    }

    const totalPriceIVA = () => {
        return (totalPrice() * 1.21).toFixed(2)
    }

    const totalPriceUnit = (product) => {
        return product.price * product.quantity;
    }

    return (
        <CartContext.Provider value={{
            setCart,
            addToCart,
            removeFromCart,
            getCart,
            getQuantity,
            getTotalQuantity,
            totalPriceUnit,
            totalPrice,
            totalPriceIVA
            }}>
                {children}
        </CartContext.Provider>
    )

}