import React, {useMemo} from 'react';
import {useContextProvider} from "../../context/context";
import PostComponent from "../PostComponents/PostComponent";
import CommentComponent from "../CommentComponent/CommentComponent";
import styles from "../PostsComponents/PostsComponent.module.css"

const PostsWithCommentsComponent = () => {
    const {postStore: {allPosts}, commentsStore: {allComments}} = useContextProvider()

    const postsWithCommentsArray = useMemo(() => {
        return allPosts.map(post => {
                return {...post, comments: allComments.filter(value => value.postId === post.id)}
            }
        )
    }, [allPosts, allComments])
    console.log(postsWithCommentsArray)
    return (
        <div
        className={styles.PostsBox}>
            {postsWithCommentsArray.map(post => (
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
            ))}
        </div>
    );
};

export default PostsWithCommentsComponent;