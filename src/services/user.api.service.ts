import {IUsers} from "../model/IUser";
import axios, {AxiosResponse} from "axios";

let AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers:{'Content-Type': 'application/json'},
})

const getUsers = ():Promise<AxiosResponse<IUsers>> => {
    return AxiosInstance.get('/users')

}

export {getUsers}