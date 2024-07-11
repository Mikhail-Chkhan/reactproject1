import React from 'react';
import {Outlet} from "react-router-dom";
import MenuComponent from "../../components/MenuComponents/MenuComponent";

const MainLayouts = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;