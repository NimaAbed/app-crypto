import React from 'react';

import styles from "./Coin.module.css"

const Coin = ({name,symbol,marketCap,image,price,change}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img className={styles.image} src={image} />
                <span>{name}</span>
            </div>
            <span>{symbol.toUpperCase()}</span>
            <span>$ {price.toLocaleString()}</span>
            <span ><span className={change >0 ? styles.greenchange:styles.redchange}>{change.toFixed(2).toLocaleString()}</span>%</span>
            <span>{marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;