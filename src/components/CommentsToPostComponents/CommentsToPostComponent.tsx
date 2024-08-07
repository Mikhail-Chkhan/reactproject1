import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import IComment from "../../modeles/IComment";
import CommentComponent from "../CommentComponent/CommentComponent";
import {useContextProvider} from "../../context/context";

const CommentsToPostComponent = () => {
    let {postId} = useParams()
    const [comments, setComments] = useState<IComment[]>([])
    const {commentsStore:{allComments}} = useContextProvider()


    useEffect(() => {
        if (postId) {
            setComments(allComments.filter(value => (value.postId).toString() === postId))
        }

    },[allComments, postId]);

    return (
        <div>
            {comments.map((comment) =>
                <CommentComponent
                    key={comment.id}
                    postId={comment.postId}
                    id={comment.id}
                    name={comment.name}
                    email={comment.email}
                    body={comment.body}/>)}
        </div>
    );
};

export default CommentsToPostComponent;