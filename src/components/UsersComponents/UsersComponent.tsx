import React, {FC, useEffect, useState} from 'react';
import IUser from "../../model/IUser";
import {getUsers} from "../../services/user.api.service";
import IPost from "../../model/IPost";
import {getPosts} from "../../services/post.api.servece";
import PostsComponent from "../PostComponents/PostsComponent";
import UserComponent from "../UserComponents/UserComponent";
import styles from "./UsersComponents.module.css"


const UsersComponent: FC = () => {

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
                    if (posts.length === 0) {
                        console.log("error: no posts found")
                        setPosts([{id: 0, title: "This user has no posts", body: "", tags: [""]}])
                    } else {
                        console.log(posts);
                        setPosts(posts);
                    }
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
            <div className={styles.UsersBox}>
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
                }
            </div>
            <div className={styles.PostsBox}>
                {

                    <PostsComponent posts={posts}/>

                }
            </div>

        </div>

    );
}

export default UsersComponent;