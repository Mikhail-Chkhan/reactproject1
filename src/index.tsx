import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {index:true, element:<LoginPage/>},
            {path:"login", element:<LoginPage/>},
            {path:"registration", element:<RegistrationPage/>},
        ]
    }
]);
root.render(
    <RouterProvider router={router}/>
);
