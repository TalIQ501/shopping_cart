import { createContext, useContext, useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const CartContext = createContext({
    products: [],
    fetchError: null,
    total: false
});

export const CartProvider = ({ children }) => {
    const { products } = useContext(ProductsContext);

    const [ cart, setCart ] = useState([]);

    const [ total, setTotal ] = useState(0);

    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        const getTotal = () => {
            let newTotal = 0;
            cart.forEach(cartItem => {
                const item = products.find(product => product.id === cartItem.objectId);
                if (!item) return
                newTotal += cartItem.qty * item.price.toFixed(2);
            })
            if (newTotal !== total) setTotal(newTotal)
        }
        getTotal()
    }, [cart, products]);

    return (
        <CartContext.Provider value={{ cart, setCart, total, isOpen, setIsOpen }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);