import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const BtnAddToCart = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const { id } = product;

  const addToCart = () => {
    setCart((prevCart) => {
      const item = prevCart.find((cartItem) => cartItem.objectId === id);

      //Create a new cart to update quantity
      if (item) {
        return prevCart.map((cartItem) =>
          cartItem.objectId === id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      }

      return [...prevCart, { objectId: id, qty: 1 }];
    });
  };

  return <button onClick={() => addToCart()}>Add to Cart</button>;
};
