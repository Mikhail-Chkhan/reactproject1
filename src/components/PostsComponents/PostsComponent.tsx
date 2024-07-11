import React, {useEffect, useState} from 'react';
import IPost from "../../modeles/IPost";
import getPosts from "../../servises/post.api.service";
import PostComponent from "../PostComponents/PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getPosts().then(response => {
        setPosts(response.data)
        console.log(response.data)})
    }, []);

    return (
        <div>
            {posts.map((post) =>
            <PostComponent
                key={post.id}
                userId={post.userId}
                id={post.id}
                title={post.title}
                body={post.body}/>)}
        </div>
    );
};

export default PostsComponent;