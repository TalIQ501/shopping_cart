import styles from './ProductGrid.module.css'

export const ItemGrid = ({ children }) => {
    return (
        <div className={styles.gridContainer}>
            {children}
        </div>
    );
}