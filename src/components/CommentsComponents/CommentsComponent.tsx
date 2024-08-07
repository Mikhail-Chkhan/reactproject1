import React, {useEffect, useState} from 'react';
import IComment from "../../modeles/IComment";
import getComments from "../../servises/comment.api.service";
import CommentComponent from "../CommentComponent/CommentComponent";
import {useContextProvider} from "../../context/store";
const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>([])
    
    const {commentsStore:{allComments}} = useContextProvider();
    useEffect(() => setComments(allComments), [allComments, comments]);

    return (
        <div>
            {comments.map((comment)=>
                <CommentComponent
                    key = {comment.id}
                    postId={comment.postId}
                    id={comment.id}
                    name={comment.name}
                    email={comment.email}
                    body={comment.body}/>)}
        </div>
    );
};

export default CommentsComponent;