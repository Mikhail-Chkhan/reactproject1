import React, {useEffect, useState} from 'react';
import IUser from "../../modeles/IUser";
import getUsers from "../../servises/user.api.service";
import UserComponent from "../UserComponents/UserComponent";
import styles from "./UsersComponent.module.css"
import {getPostByUserId} from "../../servises/post.api.service";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
        console.log(response.data)})
    }, []);



    return (
        <div className={styles.UserBox}>
            {users.map((user) =>
                <UserComponent
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    phone={user.phone}/>
            )}
        </div>
    );
};

export default UsersComponent;