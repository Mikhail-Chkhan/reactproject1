import React, {FC, useState} from 'react';
import IPost from "../../modeles/IPost";
import styles from "./PostComponent.module.css";
import {Outlet} from "react-router-dom";
import {useStore} from "../../context/store";
import IComment from "../../modeles/IComment";


const PostComponent: FC<IPost> = ({id, userId, title, body, disableFoo=false}) => {

    const {postSlice:{showComments}}=useStore()
    const [comments, setComments] = useState<IComment[]>([]);
    const [flag, setFlag] = useState(false)

    const handleToggleComments = () => {
        if (disableFoo) return
        const postComments = showComments(!flag, {id, userId, title, body})
        setFlag(!flag)

        setComments(postComments);
    };

    return (
        <>
            <div onClick={handleToggleComments} className={styles.divPost}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            {comments.length > 0 && (
                <div>
                    {comments.map(comment => (
                        <div key={comment.id}>
                            <p>{comment.name}</p>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
            <Outlet/>
        </>
    );
};

export default PostComponent;