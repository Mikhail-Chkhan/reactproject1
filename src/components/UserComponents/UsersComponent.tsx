import React, {FC} from 'react';
import IUser from "../../model/IUser";
import UserComponent from "./UserComponent";

type IProps = {users:IUser[]};

const UsersComponent:FC<IProps> = ({users}) => {
    console.log(users)
    return (
        <div>
            {/*{*/}
            {/*    users.map(({firstName, lastName, maidenName, id, point}) =>*/}
            {/*        <UserComponent*/}
            {/*            key={id}*/}
            {/*            id={id}*/}
            {/*            firstName={firstName}*/}
            {/*            lastName={lastName}*/}
            {/*            maidenName={maidenName}*/}
            {/*            point={clickButton}*/}
            {/*        />)*/}

            {/*}*/}

        </div>
    );
};

export default UsersComponent;