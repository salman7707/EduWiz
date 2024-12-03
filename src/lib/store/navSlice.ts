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
        }
    }
})

export const { changeNavState } = navSlice.actions;
export default navSlice.reducer;