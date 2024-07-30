import React, {FC} from 'react';
import {ICar} from "../../models/ICar";
import styles from "./CarComponent.module.css"

const CarComponent:FC<ICar> = ({id, brand,price, year}) => {




    return (
        <div className={styles.divCar}>
            <div>{id}</div>
            <div>{brand}</div>
            <div>{year}</div>
            <div>{price}</div>
        </div>
    );
};

export default CarComponent;