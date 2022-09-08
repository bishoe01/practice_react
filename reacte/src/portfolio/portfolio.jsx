import React from 'react';
import styles from './portfolio.module.css';
function Portfolio(props) {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span>portfolio</span>
                <h3>What we can Do</h3>
            </div>
            <div className={styles.card}>
            <section className={`${styles.chapter} ${styles.one}`}>
                    <div className={styles.texture}>
                        <h2>Stationary</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </section>
                <section className={`${styles.chapter} ${styles.two}`}>
                    <div className={styles.texture}>
                        <h2>Stationary</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </section>
                <section className={`${styles.chapter} ${styles.three}`}>
                    <div className={styles.texture}>
                        <h2>Stationary</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </section>
                <section className={`${styles.chapter} ${styles.four}`}>
                    <div className={styles.texture}>
                        <h2>Stationary</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </section>

            </div>

        </section>
    );
}

export default Portfolio;

function Card(props) {
    return (
        <section className={styles.item}>

        </section>
    )
}