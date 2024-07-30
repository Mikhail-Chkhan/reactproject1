import React from 'react';
import {Link} from "react-router-dom";
import styles from "./CarsMenuComponent.module.css"

const CarsMenuComponent = () => {
    let clearToken = () => {
        localStorage.clear()
    }
    return (
        <div className={styles.divMenu}>
            <div><Link to={'/login'} onClick={clearToken}>Log out</Link></div>
            <div><Link to={'create'}>Create new cars</Link></div>
            <div><Link to={''}>All cars</Link></div>
        </div>
    );
};

export default CarsMenuComponent;