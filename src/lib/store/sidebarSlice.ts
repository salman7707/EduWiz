import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openState: { open: false, id: null },
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {

    }
})