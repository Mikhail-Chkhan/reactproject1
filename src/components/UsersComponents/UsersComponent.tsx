import React, { Component } from 'react';
import IUser, {IUsers} from "../../models/IUsers";
import {getUsers} from "../../service/user.api.servise";
import UserComponent from "../UserComponets/UserComponent";

type MyState = {
    users: IUser[];
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
                            id={user.id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            maidenName={user.maidenName}
                        />

            </div>
        ))}
            </div>
        );
    }
}

export default UsersComponent;
