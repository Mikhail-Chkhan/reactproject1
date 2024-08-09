import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import CommentComponent from "../CommentComponent/CommentComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {commentAction} from "../../redux/slices/commentSlice";

const CommentsToPostComponent = () => {
    let dispatch = useAppDispatch()
    let comment = useAppSelector(state => state.commentStore.comment)

    const { postId } = useParams<{ postId: string }>();

    useEffect(() => {
        if (postId) {
            dispatch(commentAction.loadComment(Number(postId)));
        }
    }, [postId]);

    return <div>
        {comment ? (<CommentComponent
                key={comment.id}
                postId={comment.postId}
                id={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
            />): <h2>not comment</h2>}

    </div>;
};

export default CommentsToPostComponent;
