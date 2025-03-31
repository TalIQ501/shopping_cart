import { useContext } from "react";
import { ItemGrid } from "../../components/ItemGrid/ItemGrid";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Item } from "../../components/Item/Item";

export const StorePage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section>
      <h2>Store</h2>
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
