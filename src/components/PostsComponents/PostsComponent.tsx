import React, {useEffect, useState} from 'react';
import IPost from "../../modeles/IPost";
import PostComponent from "../PostComponents/PostComponent";
import {Outlet, useSearchParams} from "react-router-dom";
import styles from "./PostsComponent.module.css"
import {useContextProvider} from "../../context/ContextProvider";

const PostsComponent = () => {
    let [searchParams] = useSearchParams()
    let userId = searchParams.get('userId')

    const [posts, setPosts] = useState<IPost[]>([])
    const {postStore: {allPosts}} = useContextProvider()

    useEffect(() => {
        if (userId) {
            const filteredPosts = allPosts.filter(post => (post.userId).toString() === userId);
            setPosts(filteredPosts)
            console.log(filteredPosts)
        } else {
            setPosts(allPosts)
        }
    }, [userId, allPosts]);


    return (
        <div
            className={styles.PostsBox}>
            <Outlet/>
            {posts.map((post) =>
                <PostComponent
                    key={post.id}
                    userId={post.userId}
                    id={post.id}
                    title={post.title}
                    body={post.body}/>)}
        </div>
    );
};
export default PostsComponent;


