import React from 'react';
import './App.css';
import UsersComponent from "./components/UsersComponents/UsersComponent";
const App = () => {


    return (
        <div>
            <UsersComponent/>
        </div>
    );
}

export default App;



// const App: FC = () => {
//
//     const [users, setUsers] = useState<IUser[]>([]);
//     const [posts, setPosts] = useState<IPost[]>([]);
//     const [UserId, setUserId] = useState<number>(0);
//
//     useEffect(() => {
//         getUsers()
//             .then(value => {
//                 console.log(value.data.users)
//                 setUsers(value.data.users);
//             });
//     }, []);
//
//     useEffect(() => {
//         if (UserId !== 0) {
//
//             getPosts(UserId)
//                 .then(value => {
//                     let posts = value.data.posts
//                     console.log(posts)
//                     setPosts(posts)
//                 })
//         }
//     }, [UserId]);
//
//
//     const clickButton = (id: number) => {
//         console.log(id)
//         setUserId(id)
//         //  getPosts(id)
//         // .then(value => {
//         //     let posts = value.data.posts
//         //     console.log(posts)
//         // setPosts(posts)});



    // return (
        // <div>
        //     <div className={"UserBox"}>
        //         {
        //             users.map(({firstName, lastName, maidenName, id, point}) =>
        //                 <UserComponent
        //                     key={id}
        //                     id={id}
        //                     firstName={firstName}
        //                     lastName={lastName}
        //                     maidenName={maidenName}
        //                     point={clickButton}
        //                 />)
        //             // <UsersComponent users={users}/>
        //
        //         }
        //     </div>
        //     <div>
        //         {
        //
        //             <PostsComponent posts={posts}/>
        //
        //         }
        //     </div>
//         <div>
//         {<UsersComponent/>}
//         </div>
//
//     );
// }
// export default App;