import React, {useEffect} from 'react';
import PostComponent from "../PostComponents/PostComponent";
import {useSearchParams} from "react-router-dom";
import styles from "./PostsComponent.module.css";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postAction} from "../../redux/slices/postSlice";
import {commentAction} from "../../redux/slices/commentSlice";

const PostsComponent = () => {
    let [searchParams] = useSearchParams();
    let userId = searchParams.get('userId');

    let dispatch = useAppDispatch()
    let {posts, error, isLoaded} = useAppSelector(state => state.postStore)



    useEffect(() => {
        dispatch(commentAction.loadComments())
        if (userId) {
            dispatch(postAction.loadPost(Number(userId)));///тут передаем 1 объет, а рендерится массив объектов
        } else {
            dispatch(postAction.loadPosts());
        }
    }, [dispatch,userId]);

    return (
        <div className={styles.PostsBox}>

            {error ? (
                <h2>{error}</h2>
            ) : !isLoaded ? (
                <h2>...Loading</h2>
            ) : (
                posts.map((post) => (
                        <PostComponent
                            key={post.id}
                            userId={post.userId}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                            disableFoo={false}
                        />
                    )
                ))}
        </div>
    );
};

export default PostsComponent;
