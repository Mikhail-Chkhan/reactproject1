import React, {FC} from 'react';
import IComment from "../../models/IComment";

const CommentComponent: FC<IComment>= ({id, body, postId, name, email}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{body}</div>
            <div>{postId}</div>
            <div>{email}</div>
        </div>
    );
};

export default CommentComponent;