import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import MenuComponent from "../../components/MenuComponents/MenuComponent";
import styles from "./mainLayouts.module.css"
import {Context} from "../../context/context";
import getUsers from "../../servises/user.api.service";
import getPosts from "../../servises/post.api.service";
import IUser from "../../modeles/IUser";
import IPost from "../../modeles/IPost";
import IComment from "../../modeles/IComment";
import getComments from "../../servises/comment.api.service";

const MainLayouts = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [posts, setPosts] = useState<IPost[]>([])
    const [comments, setComments] = useState<IComment[]>([])
    
    useEffect(() => {
        getUsers().then(response => setUsers(response.data));
        getPosts().then(response => setPosts(response.data))
        getComments().then(response => setComments(response.data))

    }, []);

    const showCommentsToPost = (flag: boolean, post:IPost) => {
        if (flag) {return  comments.filter(value => value.postId === post.id)}
        else {return []}
    }

    return (
        <div className={styles.divMainLayouts}>
            <Context.Provider value={
                {
                    commentsStore: {allComments: comments},
                    postStore: {
                        allPosts: posts,
                        showComments: showCommentsToPost
                    },
                    userStore: {allUsers: users},
                }
            }>
                <MenuComponent/>
                <Outlet/>
            </Context.Provider>
        </div>
    );
};

export default MainLayouts;