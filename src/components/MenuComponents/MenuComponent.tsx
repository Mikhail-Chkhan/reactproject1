import React from 'react';
import {Link} from "react-router-dom";
import styles from "./MenuComponent.module.css"


const MenuComponent = () => {
    // const obj = useContextProvider()
    return (
        <div className={styles.divMenu}>
            <div className={styles.divLink}><Link to={'users'}>Users page</Link></div>
            <div className={styles.divLink}><Link to={'posts'}>Posts page</Link></div>
            <div className={styles.divLink}><Link to={'comments'}>Comments page</Link></div>
            <div className={styles.divLink}><Link to={'posts_comments'}>Posts with comments</Link></div>
        </div>
    );
};

export default MenuComponent;