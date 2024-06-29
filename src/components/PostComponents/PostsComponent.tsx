import React, {FC} from 'react';
import IPost from "../../model/IPost";
import {IPosts} from "../../model/IPost";
import PostComponent from "./PostComponent";


type IProps = {posts:IPost[]};
const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            { posts?.map(({id, title, body, tags}) =>
             <PostComponent key={id} id={id} title={title} body={body} tags={tags}/> )}
        </div>
    );
};

export default PostsComponent;