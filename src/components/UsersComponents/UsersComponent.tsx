import React from 'react';
import UserComponent from "../UserComponents/UserComponent";
import styles from "./UsersComponent.module.css"
import useStore from "../../context/store";


const UsersComponent = () => {
const {userSlice:{allUsers}} = useStore()

    return (
        <div className={styles.UserBox}>
            {allUsers.map((user) =>
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