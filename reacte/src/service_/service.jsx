import React from 'react';
import styles from './service.module.css';
function Service(props) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h5>services</h5>
                    <h2>What We Offer</h2>
                </div>
                <div className={styles.content}>
                    <Box title={"Responsive"} span={"Lorem ipsum I love coding"} icon={"fa-solid fa-mobile-screen-button"} />
                    <Box title={"Experiments"} span={"Lorem ipsum I love coding"} icon={"fa-solid fa-flask"} />
                    <Box title={"Quickness"} span={"Lorem ipsum I love coding"} icon={"fa-solid fa-bolt-lightning"} />
                    <Box title={"Global Shipping"} span={"Lorem ipsum I love coding"} icon={"fa-solid fa-earth-americas"} />
                </div>
            </div>
        </section>
    );
}

export default Service;

function Box({ title, span, icon }) {
    return (
        <div className={styles.box}>
            <div className={styles.iconBack} ><i className={`${icon} ${styles.menu}`}></i></div>
            <div className={styles.texture_box}>
                <h4>{title}</h4>
                <span>{span}</span>
            </div>
        </div>)
}