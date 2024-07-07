import React, { Component } from 'react';
import IUser, {IUsers} from "../../models/IUsers";
import {getUsers} from "../../service/user.api.servise";
import UserComponent from "../UserComponets/UserComponent";

type MyState = {
    users: IUser[]|undefined;
}

class UsersComponent extends Component<{}, MyState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        getUsers().then(response => {
            const data: IUsers = response.data;
            console.log(data);
            this.setState({ users: data.users });
        }).catch(error => {
            console.error("Error fetching users:", error);
        });
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                {
                    users.map(user => (
                    <div key={user.id}>
                        <UserComponent
                            {user.id}
                            {user.firstName}
                            {user.lastName}
                            {user.maidenName}
                        />
                {/*<p>{user.firstName} {user.lastName}</p>*/}
            </div>
        ))}
            </div>
        );
    }
}

export default UsersComponent;
