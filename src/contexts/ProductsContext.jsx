import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            if (!res.ok) throw new Error("Failed to fetch products");
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            setFetchError(err.message);
        }
        };
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{products, fetchError}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext);