import React, {Component} from 'react';
import IUser from "../../models/IUsers";

class UserComponent extends Component<IUser> {

    componentDidMount() {}
    render() {
        const { id, firstName, lastName, maidenName, point } = this.props;
        return (
            <div>

                <div> {firstName} {lastName} {maidenName}</div>

                <button
                onClick={point}>"Click me...</button>

            </div>


        );
    }
}

export default UserComponent;