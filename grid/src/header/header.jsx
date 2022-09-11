import React from 'react';
import styles from './header.module.css';
function Header(props) {
    return (
        <navbar className={styles.navbar}>
            <h2>REACT</h2>
            <div className={styles.empty}></div>
            <ul className={styles.list}>
                <li>Home</li>
                <li>About</li>
                <li>Settings</li>
            </ul>
        </navbar>
    );
}

export default Header;