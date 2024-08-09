import React, {useEffect} from 'react';
import UserComponent from "../UserComponents/UserComponent";
import styles from "./UsersComponent.module.css";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userAction} from "../../redux/slices/userSlice";

const UsersComponent = () => {
    let dispatch = useAppDispatch();
    let {users, isLoaded, error} = useAppSelector(state => state.userStore);

    useEffect(() => {
        dispatch(userAction.loadUsers())
    }, []);

    return (
        <div className={styles.UserBox}>
            {error ? (
                <h2>{error}</h2>
            ) : isLoaded ? (
                users.map((user) =>
                    <UserComponent
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        phone={user.phone}/>
                )
            ) : (
                <h2>...Loading</h2>
            )}
        </div>
    );
};

export default UsersComponent;
