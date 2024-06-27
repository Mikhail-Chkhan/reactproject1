import React, {FC} from 'react';
import IUser from "../../model/IUser";


const UserComponents:FC<IUser> = ({id,firstName, lastName, maidenName}) => {
    return (
        <div>
            {firstName} {lastName} {maidenName}
        </div>
    );
};

export default UserComponents;