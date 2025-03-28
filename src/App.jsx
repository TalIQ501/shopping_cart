import { Outlet } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { ShoppingCart } from "./components/ShoppingCart/ShoopingCart";

function App() {
  return (
    <>
      <ShoppingCart />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
