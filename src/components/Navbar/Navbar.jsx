import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

import cartLogo from '../../assets/shopping-cart-outline-svgrepo-com.svg';

export const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.logoDiv}>
                <h1>Online Store</h1>
            </div>
            <Nav />
            
        </header>
    );
}

const Nav = () => {
    return (
        <nav>
            <ul >
                <li><Link to="/" className={styles.link}>Home</Link></li>
                <li><Link to={"/store"} className={styles.link}>Browse</Link></li>
                <li>
                    <div className={`${styles.imgContainer} ${styles.logo}`}>
                        <img src={cartLogo} alt="" />
                    </div>
                </li>
            </ul>
        </nav>
    )
}