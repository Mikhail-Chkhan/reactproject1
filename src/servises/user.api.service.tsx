import axios from "axios";
import {baseUrl, urls} from "../constants/baseURL";
import IUser from "../models/IUser";

let axiosInstance = axios.create({
    baseURL: baseUrl,
});

export const userService = {
    getAll: async (): Promise<IUser[]> => {
        let response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    },
    getById: async (id: number): Promise<IUser> => {
        let response = await axiosInstance.get<IUser>(urls.users.byId(id));
        return response.data;
    }
}