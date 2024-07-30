import React from 'react';
import {Link} from "react-router-dom";
import styles from "./MenuAuthComponent.module.css"

const MenuAuthComponent = () => {
    return (
        <div className={styles.headerDiv}>
            <div className={styles.divLink}><Link to={'login'}>Sing in</Link></div>
            <div className={styles.divLink}><Link to={'registration'}>Sing up</Link></div>

        </div>
    );
};

export default MenuAuthComponent;