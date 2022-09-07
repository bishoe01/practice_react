import React from 'react';
import styles from './main.module.css';
function Main(props) {
    return (
        <section className={styles.main}>
            <div className={styles.texture}>
                <h1>Landing Page for apps</h1>
                <p><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam omnis fugiat amet nisi voluptatum optio provident harum doloribus consectetur corrupti?</span></p>
                <button className={styles.btn}>Show More</button>
            </div>
            <img className={styles.img} src="img/iphone.png" alt="" />
        </section>
    );
}

export default Main;