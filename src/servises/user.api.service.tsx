import axios, {AxiosResponse} from "axios";
import baseURL from "../constants/baseURL";
import IUser from "../modeles/IUser";

let AxiosInstance = axios.create({
    baseURL: baseURL,
    headers:{'Content-Type': 'application/json'}
})

const getUsers = ():Promise<AxiosResponse<IUser[]>> => {
    return AxiosInstance.get('/users')
}

export default getUsers