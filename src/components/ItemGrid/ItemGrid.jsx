import styles from './ItemGrid.module.css'

export const ItemGrid = ({ children }) => {
    return (
        <div className={styles.gridContainer}>
            {children}
        </div>
    );
}