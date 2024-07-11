import React, {FC} from 'react';
import IUser from "../../modeles/IUser";

const UserComponent:FC<IUser> = ({id, name, username, phone, email}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{name} {username} {phone} {email}</div>


        </div>
    );
};

export default UserComponent;


