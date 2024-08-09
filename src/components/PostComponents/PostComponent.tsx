import React, { FC, useState } from 'react';
import IPost from "../../models/IPost";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import styles from "./PostComponent.module.css";
import { Outlet } from "react-router-dom";
import IComment from "../../models/IComment";

const PostComponent: FC<IPost> = ({ id, userId, title, body, disableFoo = false }) => {
    const [flag, setFlag] = useState(false);
    const [filteredComments, setFilteredComments] = useState<IComment[]>([]);

    let dispatch = useAppDispatch();
    const comments = useAppSelector(state => state.commentStore.comments);

    const handleToggleComments = () => {
        if (disableFoo) return;

        if (!flag) {
            const postComments = comments.filter(comment => comment.postId === id);
            setFilteredComments(postComments);
        } else {
            setFilteredComments([]);
        }

        setFlag(!flag);
    };

    return (
        <>
            <div onClick={handleToggleComments} className={styles.divPost}>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            {flag && filteredComments.length > 0 && (
                <div>
                    {filteredComments.map(comment => (
                        <div key={comment.id}>
                            <p>{comment.name}</p>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
            <Outlet />
        </>
    );
};

export default PostComponent;
