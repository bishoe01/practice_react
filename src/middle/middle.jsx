import React from 'react';
import styles from './middle.module.css';
function Middle(props) {
    return (
        <section className={styles.section}>
            <h2>It is the perfect theme for your next Project!</h2>
            <p>Lorem ipsum dolor sit amet elit. Repellendus, sunt.</p>
            <button className={styles.btn}>Show Portfolio</button>
        </section>
            
    );
}

export default Middle;