import React from 'react';
import {Outlet} from "react-router-dom";
import MenuComponent from "../../components/MenuComponents/MenuComponent";
import styles from "./mainLayouts.module.css"

const MainLayouts = () => {
    return (
        <div className={styles.divMainLayouts}>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;