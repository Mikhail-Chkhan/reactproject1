import IUser from "./IUser";
import IPost from "./IPost";

export type PostsWithCommentsType = IUser & {posts:IPost[]}
