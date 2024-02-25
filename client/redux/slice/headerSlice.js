import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "nav",
    initialState: {
        isMenuOpen: false
    },
    reducers: {
        toggleNav: (action, state) => {
            state.isMenuOpen = action.payload
        }
    }
})

export const { toggleNav } = navSlice.actions
export default navSlice.reducer