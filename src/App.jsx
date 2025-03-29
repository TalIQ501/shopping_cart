import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { ShoppingCart } from "./components/ShoppingCart/ShoopingCart";
import { useProducts } from "./hooks/useProductsApi";
import { ProductsContext } from "./contexts/ProductContext";

function App() {
  const { products, fetchError } = useProducts();

  if (fetchError) return (<h2>Error fetching data</h2>);

  return (
    <>
      <Navbar />
      <ProductsContext.Provider value={products}>
      {/* <ShoppingCart /> */}
        <Outlet />
      </ProductsContext.Provider>
    </>
  )
}

export default App
