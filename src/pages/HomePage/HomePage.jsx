import styles from './HomePage.module.css';

import ItemGrid from '../../components/ItemGrid/ItemGrid.jsx'

export const HomePage = () => {
    return (
        <section>
            <div className={styles.flexVertical}>
                <h1>Welcome to the Online Store</h1>
                <p>Get your favourite items at your doorstep!</p>
            </div>
            <ItemGrid>
                
            </ItemGrid>
        </section>
    );
}