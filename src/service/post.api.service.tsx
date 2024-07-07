import axios, {AxiosResponse} from "axios";
import {IPosts} from "../models/IPosts";


let AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers:{'Content-Type': 'application/json'}
    ,
})
//--------------metadata---------------------//
AxiosInstance.interceptors.request.use(value => {
    value.headers.token = 'Bearer wekjhwekrlhgklwerg-wergwergbmwbnegrmwbergw-wergwergmwbgrmb'
    return value
})
//--------------metadata---------------------//
let getPosts = (id:number):Promise<AxiosResponse<IPosts>> => {
    return  AxiosInstance('/posts/user/' + id)
}

export {getPosts}