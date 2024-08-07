import React from 'react';
import CommentComponent from "../CommentComponent/CommentComponent";
import {useStore} from "../../context/store";
const CommentsComponent = () => {

const {commentSlice:{allComments}} = useStore()
    return (
        <div>
            {allComments.map((comment)=>
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