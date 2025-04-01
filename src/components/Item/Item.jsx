import { Link } from "react-router-dom";
import styles from "./Item.module.css";
import { BtnAddToCart } from "../BtnAddToCart/BtnAddToCart";

export const Item = ({ id, title, price, image, rating }) => {
  return (
    <div className={styles.item}>
        <Link to={`/store/${id}`} className="no-link">
          <div className={styles.imgContainer}>
            <img src={image} alt={title} />
          </div>
          <div className={`${styles.detailsContainer} no-link`}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>${price}</div>
            <div className={styles.rating}>{rating}⭐</div>
          </div>
        </Link>
        <BtnAddToCart key={id} id={id} />
      </div>
  );
};
