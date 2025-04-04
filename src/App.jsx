import { CartProvider } from "./contexts/CartContext.jsx";
import { ProductsProvider, useProductsContext } from "./contexts/ProductsContext.jsx"

import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { CartDisplay } from "./components/CartDisplay/CartDisplay.jsx";

function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Content />
        </CartProvider>
      </ProductsProvider>
    </>
  )
}

const Content = () => {
  const { fetchError } = useProductsContext();

  if (fetchError) return <h2>Failed to fetch data</h2>

  return (
    <>
      <Navbar />
      <CartDisplay />
      <Outlet />
    </>
  );
}

export default App
