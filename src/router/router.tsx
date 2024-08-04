import {createBrowserRouter} from "react-router-dom";
import MainAuthLayout from "../layouts/MainAuthLayouts/MainAuthLayout";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import CarsLayout from "../layouts/CarsLayout";
import CarsPage from "../pages/CarsPage";
import CarsCreatePage from "../pages/CarsCreatePage";
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainAuthLayout/>,
        children: [
            {index:true, element:<LoginPage/>},
            {path:"login", element:<LoginPage/>},
            {path:"registration", element:<RegistrationPage/>},
        ],

    },
    {path:"cars", element:<CarsLayout/>,
        children:[
            {index:true, element:<CarsPage/>},
            {path:"create", element:<CarsCreatePage/>},
            // {path:"/:carId", element:<CarsPage/>},
        ]},
]);