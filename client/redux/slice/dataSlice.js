import { createSlice } from '@reduxjs/toolkit'


const dataSlice = createSlice({
    name: 'mockData',
    initialState: {
        data: null,
    },
    reducers: {
        addData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;