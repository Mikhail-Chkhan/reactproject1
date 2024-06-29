import {IPosts} from "../model/IPost";
import axios, {AxiosResponse} from "axios";
let AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers:{'Content-Type': 'application/json'},
})

let getPosts = (id:number):Promise<AxiosResponse<IPosts>> => {
return  AxiosInstance('/posts/user/' + id)
}

export {
    getPosts
}

// const baseURL:string = 'https://dummyjson.com'
// let getPost = (id:number):Promise<IPosts> => {
//    return  fetch(baseURL + "/posts/user/" + id)
//         .then(res => res.json())
//         .then(data => ({posts: data.posts}))
// }
//
// export {
//     getPost
//     }


// import { IPosts } from "../model/IPost";
//
// const baseURL: string = 'https://dummyjson.com';
//
// let getPost = (id: number): Promise<IPosts> => {
//     return fetch(baseURL + "/posts/user/" + id)
//         .then(res => res.json())
//         .then(data => ({ posts: data.posts }));
// };
//
// export {
//     getPost
// };
//