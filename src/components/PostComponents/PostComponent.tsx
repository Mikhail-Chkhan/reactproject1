import React, {FC} from 'react';
import IPost from "../../model/IPost";

const PostComponent:FC<IPost> = ({id, title, tags,body}) => {
    return (
        <div
        className={"boxAllPost"}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
                <p>{tags}</p>
            </div>


        </div>
    );
};

export default PostComponent;