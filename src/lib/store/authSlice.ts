import { loginusertype } from "@/types/LoginUserType";
import { signupusertype } from "@/types/SignupUserTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const LoginUser = createAsyncThunk("Auth/LoginUser", async (userData: loginusertype, { rejectWithValue }) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_APIURL}auth/signin`, userData)
        console.log(" Response Data ", res)
        const data = res.data;
        console.log("🚀 ~ data:", data)

        if (!data.success) {
            console.log("Before the Toast", data.message)
            return rejectWithValue(data)
        }
        if (typeof window !== undefined) {
            window.localStorage.setItem(
                "User",
                JSON.stringify({ email: res.data.data.email, token: res.data.data.token, })
            )
        }
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Axios error:", error.response?.data);
            return rejectWithValue(error.response?.data);
        } else {
            console.log("Unexpected error:", error);
            return rejectWithValue("An unexpected error occurred");
        }
    }
})

export const SignUpUser = createAsyncThunk("Auth/Signup", async (userData: signupusertype, { rejectWithValue }) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_APIURL}auth/signup`, userData)
        const data = res.data;
        console.log("✔ SignupData ~ ", data);

        if (!data.success) {
            console.log(" ~ SignUp User data Failed", data);
            return rejectWithValue(data);
        }
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Axios error:", error.response?.data);
            return rejectWithValue(error.response?.data);
        } else {
            console.log("Unexpected error:", error);
            return rejectWithValue("An unexpected error occurred");
        }
    }
})

export interface initialValuesTypes {
    UserLoggedIn: boolean;
    signupuser: null;
    user: null;
    error: string;
}

const initialValues: initialValuesTypes = {
    UserLoggedIn: false,
    signupuser: null,
    user: null,
    error: "",
}

export const authSlice = createSlice({
    name: "Auth",
    initialState: initialValues,
    reducers: {
        logout: (state) => {
            state.UserLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginUser.pending, (state) => {
                state.UserLoggedIn = false;
                return state;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.UserLoggedIn = true;
                state.user = action.payload.data;
            })
            .addCase(LoginUser.rejected, (state) => {
                state.UserLoggedIn = false;
                state.error = "Error In Login";
            })
            .addCase(SignUpUser.pending, (state) => {
                return state;
            })
            .addCase(SignUpUser.fulfilled, (state, action) => {
                state.signupuser = action.payload.data;
            })
            .addCase(SignUpUser.rejected, (state) => {
                state.error = "Error In Signup User";
                return state;
            })
    },
})
export const { logout } = authSlice.actions;
export default authSlice.reducer;