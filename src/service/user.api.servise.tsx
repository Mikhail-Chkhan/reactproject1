import axios, {AxiosResponse} from "axios";
import baseURL from "../constants/baseURL";
import {IAuth} from "../models/IAuth";
import {IToken} from "../models/IToken";
import {IError} from "../models/IError";
import {IUserResponse} from "../models/IUserResponse";
import {retriveLocalStorageData} from "../helpers/tokenHelper";

type AuthResponse = IToken | IError;

let axiosInstance = axios.create({
    baseURL: baseURL
})

let sing_in = async (data: IAuth): Promise<AxiosResponse<AuthResponse>> => {
    let response: AxiosResponse<AuthResponse> = await axiosInstance.post<AuthResponse>("/auth", data);
    localStorage.setItem('tokenPair', JSON.stringify(response.data));
    // console.log(response)
    return response;
}

let sing_up = async (data: IAuth): Promise<AxiosResponse<IUserResponse>> => {
    let response: AxiosResponse<IUserResponse> = await axiosInstance.post<IUserResponse>("/users", data);
    // console.log(response)
    return response
}

// @ts-ignore
const refresh = async (): Promise<AuthResponse> => {

    const refreshToken = retriveLocalStorageData<IToken>('tokenPair').refresh;
    const response = await axiosInstance.post<IToken>('/auth/refresh', {refresh: refreshToken});
    localStorage.setItem('tokenPair', JSON.stringify(response.data));
}


export {
    sing_in,
    sing_up,
    refresh,
}