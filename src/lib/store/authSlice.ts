import { createSlice } from "@reduxjs/toolkit";

export interface initialValuesTypes {
    UserLoggedIn: boolean;
}

const initialValues: initialValuesTypes = {
    UserLoggedIn: true,
}

export const authSlice = createSlice({
    name: "Auth",
    initialState: initialValues,
    reducers: {
        login: (state) => {
            state.UserLoggedIn = true;
        },
        logout: (state) => {
            state.UserLoggedIn = false;
        },
    }
})
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;