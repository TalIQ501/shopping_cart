import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { ShoppingCart } from "./components/ShoppingCart/ShoopingCart";
import { useProducts } from "./hooks/useProductsApi";

function App() {
  const { products, fetchError } = useProducts();

  if (fetchError) return (<h2>Error fetching data</h2>);

  return (
    <>
      {/* <ShoppingCart /> */}
      <Navbar />
      <Outlet products={products} />
    </>
  )
}

export default App
