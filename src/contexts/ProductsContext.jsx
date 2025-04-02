import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);
    const [ fetchError, setFetchError ] = useState(null);
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            if (!res.ok) throw new Error("Failed to fetch products");
            const data = await res.json();
            setProducts(data);
            setFetchError(null);
        } catch (err) {
            setFetchError(err.message);
        } finally {
            setLoading(false);
        }
        };
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, fetchError, loading }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext);