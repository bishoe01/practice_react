import React from 'react';
import { Button, Container } from 'react-bootstrap';
import styles from './profile.module.css';
function Profile(props) {
    return (
        <section className={styles.section}>
                <div className={styles.leftContainer}>
                    <img className={styles.avatar} src="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1397&q=80" alt="" />
                    <div className={styles.description}>
                        <h2>Killian Sven</h2>
                        <h6>Front-end Designer</h6>
                        <p className={styles.location}><i className={`fa-solid fa-location-dot ${styles.icon}`}></i>
                            <span>서울마포구</span>
                        </p>
                        <button className={styles.btn}>Contact</button>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.category}>
                        <h6>Location</h6>
                        <h6>Age</h6>
                        <h6>Experience</h6>
                        <h6>School</h6>
                    </div>
                    <div className={styles.info}>
                        <h6>서울 마포구</h6>
                        <h6>1999.01.03</h6>
                        <h6>신입</h6>
                        <h6>Erica</h6>
                    </div>
                </div>
                <div className={styles.title}>
                </div>
        </section>
    );
}

export default Profile;