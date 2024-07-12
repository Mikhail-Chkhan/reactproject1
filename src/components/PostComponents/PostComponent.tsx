import React, {FC} from 'react';
import IPost from "../../modeles/IPost";
import styles from "./PostComponent.module.css"
import {Link} from "react-router-dom";

const PostComponent:FC<IPost> = ({id,userId,title,body} ) => {

    return (
        <Link to={`${id}/comments`}>
        <div
        className={styles.divPost}>
            <h3>{title} </h3>
            <p>{body}</p>
        </div>
        </Link>
    );
};

export default PostComponent;