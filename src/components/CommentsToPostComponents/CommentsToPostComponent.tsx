import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import IComment from "../../modeles/IComment";
import CommentComponent from "../CommentComponent/CommentComponent";
import {getCommentsByPostId} from "../../servises/comment.api.service";

const CommentsToPostComponent = () => {
    let {postId} = useParams()
    console.log(`postId: ${postId}`)
    const [comments, setComments] = useState<IComment[]>([])


    useEffect(() => {
        if (postId) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            getCommentsByPostId(+postId).then(response => setComments(response.data))
        }

    },[postId]);

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