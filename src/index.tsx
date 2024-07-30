import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import MainAuthLayout from "./layouts/MainAuthLayouts/MainAuthLayout";
import CarsLayout from "./layouts/MainAuthLayouts/CarsLayout";
import CarsPage from "./pages/CarsPage";
import CarsCreatePage from "./pages/CarsCreatePage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
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
root.render(
    <RouterProvider router={router}/>
);
