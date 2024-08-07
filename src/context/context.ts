import IUser from "../modeles/IUser";
import IPost from "../modeles/IPost";
import IComment from "../modeles/IComment";
import {createContext, useContext} from "react";

type StoreType = {
    userStore: {
        allUsers: IUser[]
    },
    postStore: {
        allPosts: IPost[],
        showComments: (flag:boolean,post: { id: number; title: string; body: string; userId: number }) => IComment[]
    },
    commentsStore: {
        allComments: IComment[]
    }
}




const defaultValue:StoreType = {
    userStore: {
        allUsers: []
    },
    postStore: {
        allPosts: [],
        showComments:()=> []
    },
    commentsStore: {
        allComments: []
    }
};
export const Context = createContext<StoreType>(defaultValue)
export const useContextProvider = ():StoreType => useContext(Context)