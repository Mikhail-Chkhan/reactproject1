import React, { useEffect, useMemo } from 'react';
import PostComponent from "../PostComponents/PostComponent";
import CommentComponent from "../CommentComponent/CommentComponent";
import styles from "../PostsComponents/PostsComponent.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { commentAction } from "../../redux/slices/commentSlice";
import { postAction } from "../../redux/slices/postSlice";

const PostsWithCommentsComponent = () => {
    let dispatch = useAppDispatch();
    let { posts} = useAppSelector(state => state.postStore);
    let { comments, isLoaded, error  } = useAppSelector(state => state.commentStore);

    useEffect(() => {
        dispatch(postAction.loadPosts());
        dispatch(commentAction.loadComments());
    }, [dispatch]);

    const postsWithCommentsArray = useMemo(() => {
        return posts.map(post => ({
            ...post,
            comments: comments.filter(comment => comment.postId === post.id),
        }));
    }, [posts, comments]);

    return (
        <div className={styles.PostsBox}>
            {error ? (
                <h2>{error}</h2>
            ) : !isLoaded ? (
                <h2>...Loading</h2>
            ) : (

                postsWithCommentsArray.map(post => (
                <React.Fragment key={post.id}>
                    <PostComponent
                        userId={post.userId}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        disableFoo={true}
                    />
                    {post.comments.map(comment => (
                        <CommentComponent
                            key={comment.id}
                            postId={comment.postId}
                            id={comment.id}
                            name={comment.name}
                            email={comment.email}
                            body={comment.body}
                        />
                    ))}
                </React.Fragment>
            )))}
        </div>
    );
};

export default PostsWithCommentsComponent;
