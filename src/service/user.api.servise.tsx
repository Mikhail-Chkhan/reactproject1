import axios, {AxiosResponse} from "axios";
import baseURL from "../constants/baseURL";
import {IAuth} from "../models/IAuth";
import {IToken} from "../models/IToken";
import {IError} from "../models/IError";

type AuthResponse = IToken | IError;

let axiosInstance = axios.create({
    baseURL: baseURL
})

let sing_in = async (data: IAuth): Promise<AxiosResponse<AuthResponse>> => {
    let response:AxiosResponse<AuthResponse> = await axiosInstance.post<AuthResponse>("/auth", data);
    console.log(response)
    return response;
}
export {sing_in}
