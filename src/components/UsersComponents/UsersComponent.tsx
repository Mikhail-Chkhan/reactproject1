import React, {Component} from 'react';
import IUser, {IUsers} from "../../models/IUsers";
import {getUsers} from "../../service/user.api.servise";
import UserComponent from "../UserComponets/UserComponent";
import {getPosts} from "../../service/post.api.service";
import IPost, {IPosts} from "../../models/IPosts";
import PostComponent from "../PostComponents/PostComponent";
import styles from "./UsersComponent.module.css"

type MyState = {
    users: IUser[];
    posts: IPost[];
}

class UsersComponent extends Component<{}, MyState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            posts: [],
            // users: [{id:0, firstName:"", maidenName:"", lastName:"", point: (id: number) => {}}],
            users: []
        };
    }

    componentDidMount() {
        getUsers().then(response => {
            const data: IUsers = response.data;
            this.setState({users: data.users});
        })
    }


    clickButton = (id: number) => {
        getPosts(id).then(value => {
            const data: IPosts = value.data
            this.setState({posts: data.posts})
        });

    }


    render() {
        const {users} = this.state;
        const {posts} = this.state
         console.log(this.state.users);
        return (
            <div
            className={styles.divBox}
            >
                {
                    users.map(user => (
                        <div>
                            <UserComponent
                                id={user.id}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                maidenName={user.maidenName}
                                point={this.clickButton}
                            />

                        </div>
                    ))




                }

                {
                    posts.map(post => (
                        <div key={post.id}>
                            <PostComponent
                                id={post.id}
                                title={post.title}
                                body={post.body}
                            />
                        </div>))
                }

            </div>
        );
    }
}

export default UsersComponent;
