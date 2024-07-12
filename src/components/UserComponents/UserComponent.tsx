import React, {FC} from 'react';
import IUser from "../../modeles/IUser";
import styles from "./UserComponent.module.css"
import {getPostByUserId} from "../../servises/post.api.service";
import {Link} from "react-router-dom";

const UserComponent: FC<IUser> = ({id, name, username, phone, email}) => {
    let clickUser = (userId: number) => {
        getPostByUserId(userId).then(response => console.log(response.data))

    }
    return (

        <Link to={`/posts?userId=${id}`}
              className={styles.link}>
            <div className={styles.divUser}
                 onClick={() => clickUser(id)}>

                <div className={styles.divId}>{id}</div>
                <div className={styles.divName}>{name} / {username}</div>
                <div className={styles.divPhone}> {phone}</div>
                <div className={styles.divEmail}>{email}</div>


            </div>
        </Link>
    )
        ;
};

export default UserComponent;


