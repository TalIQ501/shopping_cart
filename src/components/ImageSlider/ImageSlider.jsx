import { useContext, useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";

import { Item } from "../Item/Item.jsx";
import { ProductsContext } from "../../contexts/ProductsContext.jsx";

import leftArrow from "../../assets/left-arrow-svgrepo-com.svg";
import rightArrow from "../../assets/right-arrow-svgrepo-com.svg";

export const ImageSlider = ({ sliderProducts }) => {
  const len = sliderProducts.length;
  const { loading } = useContext(ProductsContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentData, setCurrentData] = useState({});

  const nextSlide = () => {
    setCurrentSlide((index) => {
      if (index === len - 1) return 0;
      return index + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((index) => {
      if (index === 0) return len - 1;
      return index - 1;
    });
  };

  useEffect(() => {
    const data = sliderProducts[currentSlide];
    setCurrentData(data);
  }, [sliderProducts, currentSlide, loading]);

  if (len === 0 || !currentData) return <h2>No slides</h2>;

  return (
    <div className={styles.slider}>
      <div className={`${styles.sliderRow} flex-row`}>
        <button className={styles.btnSlider} onClick={() => prevSlide()}>
          <img className={styles.imgBtnSlider} src={leftArrow} alt="" />
        </button>
        <Item
          key={currentData.id}
          id={currentData.id}
          title={currentData.title}
          price={currentData.price}
          image={currentData.image}
          rating={currentData.rating.rate}
        />
        <button className={styles.btnSlider} onClick={() => nextSlide()}>
          <img className={styles.imgBtnSlider} src={rightArrow} alt="" />
        </button>
      </div>
    </div>
  );
};
