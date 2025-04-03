import { CartProvider } from "./contexts/CartContext.jsx";
import { ProductsContext, ProductsProvider } from "./contexts/ProductsContext.jsx"

import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { useContext } from "react";

function App() {
  const { fetchError } = useContext(ProductsContext);

  if (fetchError) return <h2>Failed to fetch data</h2>

  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Navbar />
          <Outlet />
        </CartProvider>
      </ProductsProvider>
    </>
  )
}

export default App
