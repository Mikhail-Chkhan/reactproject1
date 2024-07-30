import React from 'react';
import {Outlet} from "react-router-dom";
import CarsMenuComponent from "../../components/CarsMenuComponents/CarsMenuComponent";
import styles from "./CarsLayout.module.css"

const CarsLayout = () => {
    return (
        <div className={styles.divBox}>
            <CarsMenuComponent/>
            <Outlet/>
        </div>
    );
};

export default CarsLayout;