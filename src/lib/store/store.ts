import { configureStore } from "@reduxjs/toolkit";
import { authSlice, FetchCurrentUser } from "./authSlice";
import { navSlice } from "./navSlice";
import { sidebarSlice } from "./sidebarSlice";
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        nav: navSlice.reducer,
        sidebar: sidebarSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
store.dispatch(FetchCurrentUser())