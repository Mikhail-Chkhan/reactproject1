import React, {Component} from 'react';
import IUser from "../../models/IUsers";
import styles from "./UserComponent.module.css"
class UserComponent extends Component<IUser> {

    render() {
        const { id, firstName, lastName, maidenName, point } = this.props;
        return (
            <div
            className={styles.divUser}>

                <button
                    className={styles.buttonUser}
                    onClick={() => {
                        point(id)
                    }}
                    >{firstName} {lastName} {maidenName}
                </button>

            </div>


        );
    }
}

export default UserComponent;