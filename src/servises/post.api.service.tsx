import axios, {AxiosResponse} from "axios";
import baseURL from "../constants/baseURL";
import IPost from "../modeles/IPost";

let AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {'Content-Type': 'application/json'}
})

let getPosts = ():Promise<AxiosResponse<IPost[]>> => {
    return AxiosInstance.get('/posts')
}

export default getPosts