import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser, {IUsers} from "./model/IUser";
import UserComponents from "./components/UserComponents/UserComponents";
import {getUsers} from "./services/user.api.service";
import IPost from "./model/IPost";
import {getPosts} from "./services/post.api.servece";
import PostComponents from "./components/PostComponents/PostComponents";


const App:FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>();
    const [userId, setuserId] = useState<number>(0);

    useEffect(() => {
      getUsers()
        .then(value => {
          console.log(value.data.users)
          setUsers(value.data.users);
        });
  }, []);

  // console.log(".")

   const clickButton = (id:number)=> {
    console.log(id)
            getPosts(id)
           .then(value => {
               let posts = value.data.posts
               console.log(posts)
           setPosts(posts)});
    }


  return (
      <div>
          <div>
          {
              users.map(({firstName, lastName, maidenName, id, point}) =>
                  <UserComponents
                      key={id}
                      id={id}
                      firstName={firstName}
                      lastName={lastName}
                      maidenName={maidenName}
                      point={clickButton}
                  />)
          },
          </div>
          <div>
          {
              posts?.map(({id, title, body, tags}) =>
                  <PostComponents key={id} id={id} title={title} body={body} tags={tags}/>
              )
          }
          </div>

      </div>

  );
}

export default App;