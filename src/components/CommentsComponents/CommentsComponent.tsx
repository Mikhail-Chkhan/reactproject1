import React, {useEffect} from 'react';
import CommentComponent from "../CommentComponent/CommentComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {commentAction} from "../../redux/slices/commentSlice";

const CommentsComponent = () => {

    let dispatch = useAppDispatch()
    let {comments, isLoaded, error} = useAppSelector(state => state.commentStore)

    useEffect(() => {
        dispatch(commentAction.loadComments())
    }, []);

    return (
        <div>
            {error ? (
                <h2>{error}</h2>
            ) : isLoaded ? (comments.map((comment) =>
                    <CommentComponent
                        key={comment.id}
                        postId={comment.postId}
                        id={comment.id}
                        name={comment.name}
                        email={comment.email}
                        body={comment.body}/>)) :
                (<h2>...Loading</h2>)}
        </div>
    );
};

export default CommentsComponent;