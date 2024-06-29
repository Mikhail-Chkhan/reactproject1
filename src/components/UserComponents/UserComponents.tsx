import React, {FC} from 'react';
import IUser from "../../model/IUser";
import styles from "./UserComponents.module.css"


const UserComponents: FC<IUser> = ({id, firstName, lastName, maidenName, point}) => {
    return (
        <div
            className={styles.rowBox}>
            <div
                className={styles.nameBox}>{firstName} {lastName} {maidenName}</div>
            <button
                onClick={() => {
                    point(id)
                }}
                id={`id_${id.toString()}`}>click me
            </button>
        </div>
    );
};

export default UserComponents;