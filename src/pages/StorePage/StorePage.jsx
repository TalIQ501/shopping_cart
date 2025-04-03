import { useProductsContext } from "../../contexts/ProductsContext";

import { ItemGrid } from "../../components/ItemGrid/ItemGrid";
import { Item } from "../../components/Item/Item";

import styles from './StorePage.module.css'

export const StorePage = () => {
  const { products } = useProductsContext();

  return (
    <section>
      <div className={styles.pageHead}>
        <h2>Store</h2>
      </div>
      <ItemGrid>
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating.rate}
            />
          );
        })}
      </ItemGrid>
    </section>
  );
};
