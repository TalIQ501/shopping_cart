import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import styles from './BtnAddToCart.module.css'

export const BtnAddToCart = ({ id }) => {
  const { setCart } = useContext(CartContext);

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

  return <button className={styles.btn} onClick={() => addToCart()}>Add to Cart</button>;
};
