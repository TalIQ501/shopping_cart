import styles from './Item.module.css';

export const Item = ({ title, category, price, image, rating }) => {
    return (
        <div className={styles.item}>
            <div className={styles.imgContainer}>
                <img src={image} alt="" />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.category}>{category}</div>
            <div className={styles.price}>{price}</div>
            <div className={styles.rating}>{rating}</div>
        </div>
    );
}