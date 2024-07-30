import React from 'react';
import {Outlet} from "react-router-dom";
import MenuAuthComponent from "../../components/MenuAuthComponents/MenuAuthComponent";



const MainAuthLayout = () => {
    return (
        <div>
            <MenuAuthComponent/>
            <Outlet/>
            
        </div>
    );
};

export default MainAuthLayout;