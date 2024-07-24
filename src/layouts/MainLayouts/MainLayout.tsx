import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h2>Test owu's CarsAPI </h2>
            <Outlet/>
            
        </div>
    );
};

export default MainLayout;