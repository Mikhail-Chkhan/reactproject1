import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import MenuComponent from "../../components/MenuComponents/MenuComponent";
import styles from "./mainLayouts.module.css"
import {useStore} from "../../context/store";
import getUsers from "../../servises/user.api.service";
import getPosts from "../../servises/post.api.service";
import getComments from "../../servises/comment.api.service";

const MainLayouts = () => {
    const { loadUsers } = useStore(state => state.userSlice);
    const { loadPosts } = useStore(state => state.postSlice);
    const { loadComments } = useStore(state => state.commentSlice);

    useEffect(() => {
        getUsers().then(response => loadUsers(response.data));
        getPosts().then(response => loadPosts(response.data));
        getComments().then(response => loadComments(response.data));
    }, [loadUsers, loadPosts, loadComments]);

    return (
        <div className={styles.divMainLayouts}>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;
