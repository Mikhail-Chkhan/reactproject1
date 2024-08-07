import IUser from "../modeles/IUser";
import IPost from "../modeles/IPost";
import IComment from "../modeles/IComment";
import create from "zustand";

type UserSlice = {
    allUsers: IUser[];
    loadUsers: (users: IUser[]) => void;
    setFavoriteUser: (user: IUser) => void;
    favoriteUser: IUser | null;
}

type PostSlice = {
    allPosts: IPost[];
    loadPosts: (posts: IPost[]) => void;
    showComments: (flag: boolean, post: IPost) => IComment[];
}

type CommentSlice = {
    allComments: IComment[];
    loadComments: (comments: IComment[]) => void;
}

type StoreType = {
    userSlice: UserSlice;
    postSlice: PostSlice;
    commentSlice: CommentSlice;
}

export const useStore = create<StoreType>((set, get) => ({
    userSlice: {
        allUsers: [],
        loadUsers: (users) => {
            set((state) => ({
                ...state,
                userSlice: {
                    ...state.userSlice,
                    allUsers: users,
                },
            }));
        },
        setFavoriteUser: (user) => {
            set((state) => ({
                ...state,
                userSlice: {
                    ...state.userSlice,
                    favoriteUser: user,
                },
            }));
        },
        favoriteUser: null,
    },
    postSlice: {
        allPosts: [],
        loadPosts: (posts) => {
            set((state) => ({
                ...state,
                postSlice: {
                    ...state.postSlice,
                    allPosts: posts,
                },
            }));
        },
        showComments: (flag, post) => {
            const { commentSlice: { allComments } } = get();
            return flag ? allComments.filter(comment => comment.postId === post.id) : [];
        },
    },
    commentSlice: {
        allComments: [],
        loadComments: (comments) => {
            set((state) => ({
                ...state,
                commentSlice: {
                    ...state.commentSlice,
                    allComments: comments,
                },
            }));
        },
    },
}));

export default useStore;
