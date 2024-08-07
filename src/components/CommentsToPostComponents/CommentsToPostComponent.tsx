import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CommentComponent from "../CommentComponent/CommentComponent";
import useStore from "../../context/store";
import IComment from "../../modeles/IComment";

const CommentsToPostComponent = () => {
    const { commentSlice: { allComments } } = useStore();
    const { postId } = useParams<{ postId: string }>();
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        if (postId) {
            setComments(allComments.filter(value => value.postId.toString() === postId));
        }
    }, [allComments, postId]);

    return (
        <div>
            {comments.map((comment) => (
                <CommentComponent
                    key={comment.id}
                    postId={comment.postId}
                    id={comment.id}
                    name={comment.name}
                    email={comment.email}
                    body={comment.body}
                />
            ))}
        </div>
    );
};

export default CommentsToPostComponent;
