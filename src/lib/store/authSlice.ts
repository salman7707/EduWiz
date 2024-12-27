import { loginusertype } from "@/types/LoginUserType";
import { signupusertype } from "@/types/SignupUserTypes";
import { createSlice } from "@reduxjs/toolkit";

export interface initialValuesTypes {
    UserLoggedIn: boolean;
    value: signupusertype;
    user: loginusertype;
}

const initialValues: initialValuesTypes = {
    UserLoggedIn: false,
    value: {
        email: "",
        password: "",
    },
    user: {
        email: "",
        password: "",
    },
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
        SignUpUser: (state, action) => {
            state.value = action.payload;
        },
        LoginUser: (state, action) => {
            state.user = action.payload;
        }
    }
})
export const { login, logout, SignUpUser, LoginUser } = authSlice.actions;
export default authSlice.reducer;