import axios from "axios";
import {baseUrl, urls} from "../constants/baseURL";
import IComment from "../models/IComment";

let axiosInstance = axios.create({
    baseURL: baseUrl,
});

export const commentService = {
    getAll: async (): Promise<IComment[]> => {
        let response = await axiosInstance.get<IComment[]>(urls.comments.base);
        return response.data;
    },
    getById: async (id: number): Promise<IComment> => {
        let response = await axiosInstance.get<IComment>(urls.comments.byId(id));
        return response.data;
    }
}