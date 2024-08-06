import React, {useEffect, useState} from 'react';
import IUser from "../../modeles/IUser";
import UserComponent from "../UserComponents/UserComponent";
import styles from "./UsersComponent.module.css"
import {useContextProvider} from "../../context/ContextProvider";
const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const {userStore:{allUsers}} = useContextProvider();

    useEffect(() => {setUsers(allUsers)}, [allUsers]);

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