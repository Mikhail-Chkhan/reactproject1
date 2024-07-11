import React, {FC} from 'react';
import IPost from "../../modeles/IPost";

const PostComponent:FC<IPost> = ({id,userId,title,body} ) => {

    return (
        <div>
            <div>{id}</div>
            <div>{title} </div>
            <div>{body}</div>
            <div>{userId}</div>
        </div>
    );
};

export default PostComponent;