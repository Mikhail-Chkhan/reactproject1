// import axios, {AxiosResponse} from "axios";
//
// import IPost from "../models/IPost";
// import {baseUrl} from "../constants/baseURL";
//
// let AxiosInstance = axios.create({
//     baseURL: baseUrl,
//     headers: {'Content-Type': 'application/json'},
// })
//
// let getPosts = (): Promise<AxiosResponse<IPost[]>> => {
//     return AxiosInstance.get('/posts')
// }
// export default getPosts
//
// let getPostByUserId = (userId: number): Promise<AxiosResponse<IPost[]>> => {
//     return AxiosInstance.get(`/posts?userId=${userId}`);
// }
// export {getPostByUserId}


import axios from "axios";
import {baseUrl, urls} from "../constants/baseURL";
import IPost from "../models/IPost";

let axiosInstance = axios.create({
    baseURL: baseUrl,
});

export const postService = {
    getAll: async (): Promise<IPost[]> => {
        let response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    },
    getById: async (id: number): Promise<IPost> => {
        let response = await axiosInstance.get<IPost>(urls.posts.byId(id));
        return response.data;
    },
    getByUserId: async (userId:number): Promise<IPost[]> =>{
        let response = await axiosInstance.get<IPost[]>(urls.posts.ByUserId(userId));
        return response.data;
    }

}