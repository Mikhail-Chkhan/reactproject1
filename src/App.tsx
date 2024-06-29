import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/UserComponents/UserComponent";
import {getUsers} from "./services/user.api.service";
import IPost, {IPosts} from "./model/IPost";
import {getPosts} from "./services/post.api.servece";
import PostsComponent from "./components/PostComponents/PostsComponent";


const App: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [UserId, setUserId] = useState<number>(0);

    useEffect(() => {
        getUsers()
            .then(value => {
                console.log(value.data.users)
                setUsers(value.data.users);
            });
    }, []);

    useEffect(() => {
        if (UserId !== 0) {

            getPosts(UserId)
                .then(value => {
                    let posts = value.data.posts
                    console.log(posts)
                    setPosts(posts)
                })
        }
    }, [UserId]);


    const clickButton = (id: number) => {
        console.log(id)
        setUserId(id)
        //  getPosts(id)
        // .then(value => {
        //     let posts = value.data.posts
        //     console.log(posts)
        // setPosts(posts)});
    }


    return (
        <div>
            <div>
                {
                    users.map(({firstName, lastName, maidenName, id, point}) =>
                        <UserComponent
                            key={id}
                            id={id}
                            firstName={firstName}
                            lastName={lastName}
                            maidenName={maidenName}
                            point={clickButton}
                        />)
                    // <UsersComponent users={users}/>

                }
            </div>
            <div>
                {

                    <PostsComponent posts={posts}/>

                }
            </div>

        </div>

    );
}

export default App;