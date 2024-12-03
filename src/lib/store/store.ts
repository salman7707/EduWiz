import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { navSlice } from "./navSlice";
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        nav: navSlice.reducer,
    },
})
export default store;