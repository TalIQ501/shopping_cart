import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

import cartLogo from "../../assets/shopping-cart-svgrepo-com.svg";

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logoDiv}>
        <h1>Online Store</h1>
      </div>
      <Nav />
    </header>
  );
};

const Nav = () => {
  return (
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
          <Link to={"/cart"} className={`no-link`}>
            <div className={`${styles.imgContainer} ${styles.logo}`}>
              <img src={cartLogo} alt="cart" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
