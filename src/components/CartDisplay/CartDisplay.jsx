import { useEffect } from "react";
import { useCartContext } from "../../contexts/CartContext.jsx";
import { useProductsContext } from "../../contexts/ProductsContext.jsx";

import styles from "./CartDisplay.module.css";

import picBtnAdd from "../../assets/plus-svgrepo-com.svg";
import picBtnMinus from "../../assets/minus-svgrepo-com.svg";

export const CartDisplay = () => {
  const { cart, setCart, total, isOpen, setIsOpen } = useCartContext();
  const { products } = useProductsContext();

  const increaseQty = ({ id }) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.objectId === id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      )
    );
  };

  const decreaseQty = ({ id }) => {
    setCart((prevCart) => {
      const newCart = [];

      for (const cartItem of prevCart) {
        if (cartItem.objectId === id) {
          const newQty = cartItem.qty - 1;

          if (newQty > 0) {
            newCart.push({ ...cartItem, qty: newQty });
          }
        } else {
          newCart.push(cartItem);
        }
      }

      return newCart;
    });
  };

  useEffect(() => {}, [cart]);

  if (!isOpen) return null;

  return (
    <div className={styles.dialog}>
      <div className={`flex-column ${styles.cart}`}>
        <div className={styles.total}>Total: <span>${total.toFixed(2)}</span></div>
        <div className={`${styles.itemContainer}`}>
          {cart.map((cartItem) => {
            const product = products.find((p) => p.id === cartItem.objectId);
            if (!product) return null;
            return (
              <div
                className={`${styles.cartItem} flex-column`}
                key={product.id}
              >
                <div className={styles.imgContainer}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={`${styles.lowerContainer} flex-row`}>
                  <div className={`flex-column`}>
                    <div className={styles.perUnitPrice}>
                      Per Unit: ${product.price}
                    </div>
                    <div className={`${styles.qtyContainer} flex-row`}>
                      <button
                        className={`btn-primary ${styles.btnContainer} ${styles.btnCart}`}
                        onClick={() => decreaseQty({ id: product.id })}
                      >
                        <img src={picBtnMinus} alt="remove 1" />
                      </button>
                      <div className={styles.qty}>{cartItem.qty}</div>
                      <button
                        className={`btn-primary ${styles.btnContainer} ${styles.btnCart}`}
                        onClick={() => increaseQty({ id: product.id })}
                      >
                        <img src={picBtnAdd} alt="add 1" />
                      </button>
                    </div>
                  </div>
                  <div className={styles.totalPrice}>
                    ${(cartItem.qty * product.price).toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className={`btn-primary ${styles.btnClose}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          Close Cart
        </button>
      </div>
    </div>
  );
};
