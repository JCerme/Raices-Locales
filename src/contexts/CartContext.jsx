import { useState, createContext } from 'react'
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
 
    const addToCart = (product) => {
        setCart([...cart, product])
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
        return cart.reduce((acco, product) => acco += (product.price * product.quantity), 0)
    }
    const totalPriceUnit = (product) => {
        return product.price * product.quantity;
    }
    return (
        <CartContext.Provider value={{
            addToCart,
            getCart,
            getQuantity,
            getTotalQuantity,
            totalPriceUnit,
            totalPrice
            }}>
                {children}
        </CartContext.Provider>
    )

}