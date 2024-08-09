import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";

import {AxiosError} from "axios";
import IUser from "../../models/IUser";
import {userService} from "../../servises/user.api.service";


type UserSliceType = {
    users: IUser[];
    isLoaded: boolean,
    error: string;
    user: IUser | null;
}
const initialState: UserSliceType = {
    users: [],
    isLoaded: false,
    error: '',
    user: null

};

let loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
    try {
        let users = await userService.getAll();
        return thunkAPI.fulfillWithValue(users);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

let loadUser = createAsyncThunk('userSlice/loadUser',
    async (id: number, thunkAPI) => {
        try {
            let user = await userService.getById(id);
            return thunkAPI.fulfillWithValue(user);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    });


export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        fillUser: (state, action) => {
            state.user = action.payload;
        },
        refillUsers: (state, action) => {
            state.users = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadUsers.fulfilled,
                (state, action) => {
                    state.users = action.payload;
                    state.isLoaded = true;

                })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoaded = true;

            })
            .addMatcher(
                isRejected(loadUsers, loadUser),
                (state, action) => {
                    state.error = action.payload as string;
                })

});

export const userAction = {
    ...userSlice.actions,
    loadUsers,
    loadUser
}