import React, {useEffect, useState} from 'react';
import PostComponent from "../PostComponents/PostComponent";
import {useSearchParams} from "react-router-dom";
import styles from "./PostsComponent.module.css";
import useStore from "../../context/store";
import IPost from "../../modeles/IPost";

const PostsComponent = () => {
    let [searchParams] = useSearchParams();
    let userId = searchParams.get('userId');
    const [posts, setPotsts] = useState<IPost[]>([])

const {postSlice:{allPosts}} = useStore()


    useEffect(() => {
        if (userId) {
            setPotsts(allPosts.filter(post => (post.userId).toString() === userId));

        } else {
            setPotsts(allPosts);
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
