import { useEffect, useState } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                if (!res.ok) throw new Error("Failed to fetch products");
                const data = await res.json();
                setProducts(data)
            } catch (err) {
                setError(err.message)
            }
        }
        fetchProducts();
    }, [])

    return { products, error };
}