import styles from './Product.module.css';

export const Product = ({ title, category, price, image, rating }) => {
    return (
        <div className={styles.item}>
            <div className={styles.imgContainer}>
                <img src={image} alt="" />
            </div>
            <div className={title}></div>
            <div className={category}></div>
            <div className={price}></div>
        </div>
    );
}