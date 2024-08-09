import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";

import {AxiosError} from "axios";
import IPost from "../../models/IPost";
import {postService} from "../../servises/post.api.service";


type PostSliceType = {
    posts: IPost[];
    isLoaded: boolean,
    error: string;
    post: IPost | null;
}
const initialState: PostSliceType = {
    posts: [],
    isLoaded: false,
    error: '',
    post: null

};

let loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            let posts = await postService.getAll();
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    });

let loadPost = createAsyncThunk('postSlice/loadPost',
    async (id: number, thunkAPI) => {
        try {
            let post = await postService.getByUserId(id);
            return thunkAPI.fulfillWithValue(post);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    });


export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {
        fillPost: (state, action) => {
            state.post = action.payload;
        },
        refillPosts: (state, action) => {
            state.posts = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadPosts.fulfilled,
                (state, action) => {
                    state.posts = action.payload;
                    state.isLoaded = true;

                })
            .addCase(loadPost.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true;

            })
            .addMatcher(
                isRejected(loadPosts, loadPost),
                (state, action) => {
                    state.error = action.payload as string;
                })

});

export const postAction = {
    ...postSlice.actions,
    loadPosts,
    loadPost
}