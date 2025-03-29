import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';

import { ItemGrid } from '../../components/ItemGrid/ItemGrid.jsx'
import { Item } from '../../components/Item/Item.jsx';
import { getRandom } from '../../utils/getRandom.js';
import { useProductsContext } from '../../contexts/ProductContext.js';

export const HomePage = () => {
    const products = useProductsContext();
    const [displayList, setDisplayList] = useState([]);

    useEffect(() => {
        if (!products || products.length === 0) return;
        console.log(products)
        const len = products.length;
        const newList = [];
        const GRID_LENGTH = 4;

        for (let i = 0; i < GRID_LENGTH; i++) {
            const num = getRandom(0, len - 1);

            newList.push(products[num])
        }

        setDisplayList(newList);
    }, [])

    return (
        <section>
            <div className={styles.flexVertical}>
                <h1>Welcome to the Online Store</h1>
                <p>Get your favourite items at your doorstep!</p>
            </div>
            <ItemGrid>
                {
                    displayList.map(product => {
                        return (
                            <Item 
                                key={product.id} 
                                title={product.title}
                                category={product.category}
                                price={product.price}
                                image={product.image}
                                rating={product.rating.rate}
                            />
                        )
                    })
                }
            </ItemGrid>
        </section>
    );
}