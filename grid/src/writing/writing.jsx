import React from 'react';
import styles from './writing.module.css';
function Writing({data}) {
    return (
        <>
            {data.map((item) => (
                <div className={styles.writing}>
                <h4>{item.id}</h4>
                <h2>{item.title}</h2>
                <h4>{item.like}</h4>
            </div>)
            )}
        </>
        
    );
}

export default Writing;