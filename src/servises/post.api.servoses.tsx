import axios, {AxiosResponse} from "axios";
import IForm from "../modules/IForm";
import IStatus from "../modules/IStatus";


let AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{'Content-Type': 'application/json'},
    method:"post"

})

let addPost = (data:IForm):Promise<AxiosResponse<IStatus>> => {
    return  AxiosInstance('/posts/')
}

export {addPost}