import React from 'react';
import styles from './divbox.module.css';
function Divbox(props) {
    return (
        <section className={styles.section}>
        <div className={styles.red}></div>
        <div className={styles.green}></div>
        <div className={styles.yellow}></div>
        </section>
    );
}

export default Divbox;