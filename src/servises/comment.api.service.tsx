import axios, {AxiosResponse} from "axios";
import baseURL from "../constants/baseURL";
import IComment from "../modeles/IComment";

let AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {'Content-Type': 'application/json'},
})

const getComments = ():Promise<AxiosResponse<IComment[]>> => {
    return AxiosInstance.get('/comments')
}
export default getComments

const getCommentsByPostId = (postId:number):Promise<AxiosResponse<IComment[]>> => {
    return AxiosInstance.get('/posts/'+postId+'/comments')
}
export {getCommentsByPostId}