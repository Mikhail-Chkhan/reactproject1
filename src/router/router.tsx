import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layouts/mainLayouts/mainLayouts";
import UsersPage from "../pages/usersPage";
import PostsPage from "../pages/postsPage";

import CommentsPage from "../pages/commentsPage";
import React from "react";
import PostsWithCommentsPage from "../pages/postsWithCommentsPage";
import CommentsToPostComponent from "../components/CommentsToPostComponents/CommentsToPostComponent";

export  const router = createBrowserRouter([
    {
        path:"/", element: <MainLayouts/>, children:[
            {index: true, element: <UsersPage/>},
            {path:"users", element:<UsersPage/>},
            {path:"posts", element:<PostsPage/>, children:[{
                    path:":postId/comments", element:<CommentsToPostComponent/>
                    // path:":postId/comments", element:<PostsWithCommentsPage/>
                }]},
            {path:"comments", element:<CommentsPage/>},
            {path:"posts_comments", element:<PostsWithCommentsPage/>}

        ]
    }
])