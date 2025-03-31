import { useParams } from "react-router-dom";

import styles from "./ProductPage.module.css";
import { ProductsContext } from "../../contexts/ProductsContext.jsx";
import { useContext } from "react";

export const ProductPage = () => {
  const { productID } = useParams();

  const { products } = useContext(ProductsContext);

  const product = products.find((p) => p.id === productID);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className={styles.product}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt="" />
      </div>
      <div className={styles.detailsGrid}>
        <div className={styles.detailLabel}>Product</div>
        <div className={styles.detail}>{product.title}</div>
        <div className={styles.detailLabel}>Category</div>
        <div className={styles.detail}>{product.category}</div>
        <div className={styles.detailLabel}>Price</div>
        <div className={styles.detail}>${product.price}</div>
        <div className={styles.detailLabel}>Rating</div>
        <div className={styles.detail}>{product.rating.rate}⭐</div>
        <div>{}</div>
      </div>
    </div>
  );
};
