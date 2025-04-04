import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";

import styles from './BtnAddToCart.module.css'

export const BtnAddToCart = ({ id }) => {
  const { setCart } = useCartContext();

  const [ clicked, setClicked ] = useState(false);

  const addToCart = () => {
    setClicked(true)

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

    setTimeout(() => {
      setClicked(false);
    }, 500)
  };

  return <button className={`btn-primary ${styles.btn} ${clicked ? styles.btnClicked : ""}`} onClick={() => addToCart()}>Add to Cart</button>;
};
