import React, {FC} from 'react';
import IUser from "../../models/IUser";
import styles from "./UserComponent.module.css"
import {Link} from "react-router-dom";

const UserComponent: FC<IUser> = (user) => {
    // let clickUser = (userId: number) => {
    //     postService.getByUserId(userId).then(response => console.log(response))


return (

    <Link to={`/posts?userId=${user.id}`}
          className={styles.link}>
        <div className={styles.divUser}
            // onClick={() => clickUser(id)}
        >


            <div className={styles.divId}>{user.id}</div>
            <div className={styles.divName}>{user.name} / {user.username}</div>
            <div className={styles.divPhone}> {user.phone}</div>
            <div className={styles.divEmail}>{user.email}</div>


        </div>
    </Link>
)
    ;
}
;

export default UserComponent;


