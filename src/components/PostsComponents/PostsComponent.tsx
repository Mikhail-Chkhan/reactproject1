import React, {useEffect, useState} from 'react';
import IPost from "../../modeles/IPost";
import PostComponent from "../PostComponents/PostComponent";
import {useSearchParams} from "react-router-dom";
import styles from "./PostsComponent.module.css";
import {useContextProvider} from "../../context/context";

const PostsComponent = () => {
    let [searchParams] = useSearchParams();
    let userId = searchParams.get('userId');

    const [posts, setPosts] = useState<IPost[]>([]);
    const {postStore: {allPosts}} = useContextProvider();

    useEffect(() => {
        if (userId) {
            const filteredPosts = allPosts.filter(post => (post.userId).toString() === userId);
            setPosts(filteredPosts);
        } else {
            setPosts(allPosts);
        }
    }, [userId, allPosts]);

    return (
        <div className={styles.PostsBox}>
            {posts.map((post) => (
                <PostComponent
                    key={post.id}
                    userId={post.userId}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    disableFoo={false}
                />
            ))}
        </div>
    );
};

export default PostsComponent;
