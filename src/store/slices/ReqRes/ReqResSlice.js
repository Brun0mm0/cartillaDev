import { createSlice } from "@reduxjs/toolkit";

export const ReqResSlice = createSlice({
    name: "ReqRes",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchUsers: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchUsersError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { fetchUsers, fetchUsersSuccess, fetchUsersError } = ReqResSlice.actions;