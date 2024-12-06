import { createSlice } from "@reduxjs/toolkit";

export interface navInitialStateTypes {
    navbarOpen: boolean;
}

const initialState: navInitialStateTypes = {
    navbarOpen: true,
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        changeNavState: (state) => {
            state.navbarOpen = !state.navbarOpen
        },
        closeNav: (state) => {
            state.navbarOpen = false
        }
    }
})

export const { changeNavState, closeNav } = navSlice.actions;
export default navSlice.reducer;