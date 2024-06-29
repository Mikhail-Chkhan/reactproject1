import {IUsers} from "../model/IUser";
import axios, {AxiosResponse} from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers:{'Content-Type': 'application/json'},
})
//--------------metadata---------------------//
axiosInstance.interceptors.request.use(value => {
    value.headers.token = 'Bearer wekjhwekrlhgklwerg-wergwergbmwbnegrmwbergw-wergwergmwbgrmb'
    return value
})
//--------------metadata---------------------//
const getUsers = ():Promise<AxiosResponse<IUsers>> => {
    return axiosInstance.get('/users')

}

export {getUsers}