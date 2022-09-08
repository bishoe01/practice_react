import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './navbar.module.css';
function Navbar(props) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}><h4>React</h4></div>
            <div className={styles.empty}></div>
            <ul className={styles.items}>
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;