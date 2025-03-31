import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.jsx";
import { ProductsContext } from "../../contexts/ProductsContext.jsx";

import styles from './CartDisplay.module.css';

export const CartDisplay = () => {
    const { cart, total } = useContext(CartContext);
    const { products } = useContext(ProductsContext);

    return (
        <div className={styles.cart}>
            {
                cart.map(cartItem => {
                    const product = products.find(p => p.id === cartItem.objectId);
                    if (!product) return null;
                    return (
                        <CartProductDisplay 
                            key={cartItem.objectId}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            qty={cartItem.qty}
                        />
                    )
                })
            }
            <div className={styles.total}>Total: ${total}</div>
        </div>
    );
}

const CartProductDisplay = ({ title, price, image, qty }) => {
    return (
        <>
            <div className={styles.imgContainer}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.perUnitPrice}>Per Unit: ${price}</div>
            <div className={styles.qty}>{qty}</div>
            <div className={styles.totalPrice}>{qty * price}</div>
        </>
    )
}

