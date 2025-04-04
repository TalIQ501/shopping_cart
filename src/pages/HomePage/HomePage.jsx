import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

import { getRandom } from "../../utils/getRandom.js";
import { useProductsContext } from "../../contexts/ProductsContext.jsx";
import { ImageSlider } from "../../components/ImageSlider/ImageSlider.jsx";

export const HomePage = () => {
  const { products, loading } = useProductsContext();
  const [ displayList, setDisplayList ] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;
    const len = products.length;
    const newList = [];
    const GRID_LENGTH = 4;

    for (let i = 0; i < GRID_LENGTH; i++) {
      let num;

      do {
        num = getRandom(0, len - 1)
      } while (newList.some(entry => entry.id === products[num].id))

      newList.push(products[num]);
    }

    setDisplayList(newList);
  }, [products]);

  if (loading) return <h2>Loading...</h2>

  return (
    <section>
      <div className={styles.pageHead}>
        <h2>Welcome to the Online Store</h2>
        <p>Get your favourite items at your doorstep!</p>
      </div>
      <ImageSlider sliderProducts={ displayList } />
    </section>
  );
};
