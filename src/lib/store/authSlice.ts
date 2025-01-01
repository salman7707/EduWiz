import { loginusertype } from "@/types/LoginUserType";
import { signupusertype } from "@/types/SignupUserTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import axiosWithToken from "../axiosWithToken";

export const LoginUser = createAsyncThunk("Auth/LoginUser", async (userData: loginusertype, { rejectWithValue }) => {
    try {
        console.log(`${process.env.NEXT_PUBLIC_APIURL}auth/signin`)
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
        console.log(`${process.env.NEXT_PUBLIC_APIURL}auth/signup`)
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

export const FetchCurrentUser = createAsyncThunk("Auth/FetchCurrentUser", async (_, { rejectWithValue }) => {
    try {
        if (typeof window !== undefined) {
            const getdata = window.localStorage.getItem("User")
            console.log(" Getting USer Data From LocalStorege Initial ", getdata)

            if (getdata) {
                const fetchedUser = JSON.parse(getdata)
                console.log("🚀 ~ fetched User Data before:", fetchedUser)
                const res = await axiosWithToken.get(`auth/fetch-current-user`)
                const data = res.data;
                console.log("🚀 ~ Fetched User Data after:", data)
                if (!data.success) {
                    console.log("Data Didn't Get.")
                    return rejectWithValue(data)
                }
                console.log("Start Setting Data inside the localstorege")
                const updatefetcheduser = {
                    token: fetchedUser.token,
                    ...data.data.user,
                }
                if (typeof window !== undefined) {
                    window.localStorage.setItem("User", JSON.stringify(updatefetcheduser))
                }
                console.log("Data Set in localstorege Successfully");
                return updatefetcheduser;
            }
        }
    } catch (error) {
        console.log(error)
        return rejectWithValue(error)
    }
})

interface user {
    id?: string;
    email?: string;
    role?: string;
    profileImageUrl?: null,
    name?: string;
    providerId?: null;
    provider?: string,
    accesstoken?: null,
    otp?: string,
    createdAt?: string,
    updatedAt?: string,
    token?: string;
}

export interface initialValuesTypes {
    UserLoggedIn: boolean;
    signupuser: null;
    user: null | user;
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
            if (typeof window !== undefined) {
                window.localStorage.removeItem("User");
            }
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
            .addCase(FetchCurrentUser.pending, (state) => {
                return state;
            })
            .addCase(FetchCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                console.log("🚀 ~ fetched data Set in user Successfully")
            })
            .addCase(FetchCurrentUser.rejected, (state) => {
                if (typeof window !== undefined) {
                    window.localStorage.removeItem("User");
                }
                state.error = "Error while Fetching User."
                console.log("Error in Fetching Data.")
                return state;
            })
    },
})
export const { logout } = authSlice.actions;
export default authSlice.reducer;