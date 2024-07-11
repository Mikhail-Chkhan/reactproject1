import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <div><Link to={'users'}>Users page</Link></div>
            <div><Link to={'posts'}>Posts page</Link></div>
            <div><Link to={'comments'}>Comments page</Link></div>
        </div>
    );
};

export default MenuComponent;