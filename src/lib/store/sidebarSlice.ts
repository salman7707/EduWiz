import { createSlice } from "@reduxjs/toolkit";

export interface SideBarSliceTypes {
    openState: {
        open: boolean,
        id: null | number;
    }
}

const initialState: SideBarSliceTypes = {
    openState: { open: false, id: null },
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        ToggleState: (state, action) => {
            if (state.openState.open && state.openState.id === action.payload.id) {
                state.openState.open = false;
                state.openState.id = null;
            } else {
                state.openState.open = true;
                state.openState.id = action.payload.id;
            }
        }
    }
})
export const { ToggleState } = sidebarSlice.actions;
export default sidebarSlice.reducer;