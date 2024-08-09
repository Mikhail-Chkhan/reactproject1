import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";

import {AxiosError} from "axios";
import IComment from "../../models/IComment";
import {commentService} from "../../servises/comment.api.service";


type CommentSliceType = {
    comments: IComment[];
    isLoaded: boolean,
    error: string;
    comment: IComment | null;
}
const initialState: CommentSliceType = {
    comments: [],
    isLoaded: false,
    error: '',
    comment: null

};

let loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            let comments = await commentService.getAll();
            return thunkAPI.fulfillWithValue(comments);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    });

let loadComment = createAsyncThunk('commentSlice/loadComment',
    async (id: number, thunkAPI) => {
        try {
            let comment = await commentService.getById(id);
            return thunkAPI.fulfillWithValue(comment);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    });


export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initialState,
    reducers: {
        fillComment: (state, action) => {
            state.comment = action.payload;
        },
        refillComments: (state, action) => {
            state.comments = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadComments.fulfilled,
                (state, action) => {
                    state.comments = action.payload;
                    state.isLoaded = true;

                })
            .addCase(loadComment.fulfilled, (state, action) => {
                state.comment = action.payload;
                state.isLoaded = true;

            })
            .addMatcher(
                isRejected(loadComments, loadComment),
                (state, action) => {
                    state.error = action.payload as string;
                })

});

export const commentAction = {
    ...commentSlice.actions,
    loadComments,
    loadComment
}

export const { fillComment, refillComments } = commentSlice.actions;

export default commentSlice.reducer;