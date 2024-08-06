import IUser from "../modeles/IUser";
import IPost from "../modeles/IPost";
import IComment from "../modeles/IComment";
import {createContext, useContext} from "react";

type StoreType = {
    userStore: {
        allUsers: IUser[]
    },
    postStore: {
        allPosts: IPost[]
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
        allPosts: []
    },
    commentsStore: {
        allComments: []
    }
};
export const Context = createContext<StoreType>(defaultValue)

export const useContextProvider = ():StoreType => useContext(Context)