import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

import cartLogo from "../../assets/shopping-cart-svgrepo-com.svg";
import { useCartContext } from "../../contexts/CartContext";

export const Navbar = () => {
  const { isOpen, setIsOpen } = useCartContext();

  return (
    <header className={styles.navbar}>
      <div className={styles.logoDiv}>
        <h1>Shop Online!</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={`no-link`}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/store"} className={`no-link`}>
              Browse
            </Link>
          </li>
          <li>
            {/* <Link to={"/cart"} className={`no-link`}> */}
            <div
              className={`${styles.imgContainer} ${styles.logo}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={cartLogo} alt="cart" />
            </div>
            {/* </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};
