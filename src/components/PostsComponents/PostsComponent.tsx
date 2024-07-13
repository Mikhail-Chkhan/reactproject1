import React, {useEffect, useState} from 'react';
import IPost from "../../modeles/IPost";
import getPosts, {getPostByUserId} from "../../servises/post.api.service";
import PostComponent from "../PostComponents/PostComponent";
import {Outlet, useSearchParams} from "react-router-dom";
import styles from "./PostsComponent.module.css"

const PostsComponent = () => {
    let [searchParams] = useSearchParams()
    let userId = searchParams.get('userId')

    const [posts, setPosts] = useState<IPost[]>([])


    useEffect(() => {
        if (userId) {
            getPostByUserId(parseFloat(userId)).then(response => {
                    setPosts(response.data)
                }
            )
        } else {
            getPosts().then(response => {
                    setPosts(response.data)
                }
            )
        }
    }, []);


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


