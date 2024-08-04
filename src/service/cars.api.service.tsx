import {IToken} from "../models/IToken";
import axios, {AxiosResponse} from "axios";
import baseURL from "../constants/baseURL";
import {CarsResponse} from "../models/CarsResponse";
import {retriveLocalStorageData} from "../helpers/tokenHelper";
import {ICarCreate} from "../models/ICarCreate";
import {ICar} from "../models/ICar";


let axiosInstance = axios.create({
    baseURL: baseURL
})

axiosInstance.interceptors.request.use(requestObject => {

    if (localStorage.getItem('tokenPair') && (requestObject.url !== '/auth' && requestObject.url !== '/auth/refresh')) {
        // if (localStorage.getItem('tokenPair') && !requestObject.url.includes('/auth')) {
        requestObject.headers.set('Authorization', 'Bearer ' + retriveLocalStorageData<IToken>('tokenPair').access);

    }

    return requestObject;
})


let getCars = async (page: string = '1'): Promise<AxiosResponse<CarsResponse>> => {
    let response: AxiosResponse<CarsResponse> = await axiosInstance.get<CarsResponse>("/cars",{params: {page: page}});
    console.log(response)
    return response;
}

let createCar = async (data: ICarCreate): Promise<AxiosResponse<ICar>> => {
    let response: AxiosResponse<ICar> = await axiosInstance.post<ICar>("/cars", data);
    console.log(response)
    return response;
}

export {getCars, createCar}