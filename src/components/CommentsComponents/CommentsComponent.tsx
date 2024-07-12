import React, {useEffect, useState} from 'react';
import IComment from "../../modeles/IComment";
import getComments from "../../servises/comment.api.service";
import CommentComponent from "../CommentComponent/CommentComponent";
import PaginationComponent from "../PaginationComponents/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const CommentsComponent = () => {
    let [URLSearchParams]= useSearchParams()
    let postId = URLSearchParams.size
    console.log(postId)
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        getComments().then(response =>
        setComments(response.data))


    }, []);
    return (
        <div>
            <PaginationComponent/>
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