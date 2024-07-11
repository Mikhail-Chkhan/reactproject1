import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainLayouts from "./layouts/mainLayouts/mainLayouts";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PostsPage from "./pages/postsPage";
import UsersPage from "./pages/usersPage";
import CommentsPage from "./pages/commentsPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path:"/", element: <MainLayouts/>, children:[
            {index: true, element: <UsersPage/>},
            {path:"users", element:<UsersPage/>},
            {path:"posts", element:<PostsPage/>},
            {path:"comments", element:<CommentsPage/>},

        ]
    }
])

root.render(
    <RouterProvider router={router}/>
);