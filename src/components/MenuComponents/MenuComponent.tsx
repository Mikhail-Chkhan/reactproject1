import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <div className={"styles.divLink"}><Link to={'login'}>Sing_in</Link></div>
            <div className={"styles.divLink"}><Link to={'registration'}>Sing_up</Link></div>

        </div>
    );
};

export default MenuComponent;