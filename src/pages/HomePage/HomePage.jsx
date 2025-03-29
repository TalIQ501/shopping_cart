import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';

import { ItemGrid } from '../../components/ItemGrid/ItemGrid.jsx'
import { Item } from '../../components/Item/Item.jsx';
import { getRandom } from '../../utils/getRandom.js';

export const HomePage = ({ products }) => {
    const [displayList, setDisplayList] = useState([]);

    useEffect(() => {
        const len = displayList.length;
        const newList = [];
        const GRID_LENGTH = 4;

        for (let i = 0; i < GRID_LENGTH; i++) {
            const num = getRandom(0, len);

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