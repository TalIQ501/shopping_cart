import { useParams } from "react-router-dom";

import styles from "./ProductPage.module.css";
import { ProductsContext } from "../../contexts/ProductsContext.jsx";
import { useContext } from "react";
import { BtnAddToCart } from "../../components/BtnAddToCart/BtnAddToCart.jsx"

export const ProductPage = () => {
  const { id } = useParams();

  const { products, loading } = useContext(ProductsContext);

  const product = products.find((p) => p.id === Number(id));

  if (loading) return <h2>Loading...</h2>

  if (!product) return <h2>Product not found</h2>

  return (
    <section className={styles.product}>
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
      </div>
      <BtnAddToCart id={id} />
    </section>
  );
};
