import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './slice/dataSlice'
import navSlice from "./slice/headerSlice"
import cartReducer from "./slice/cartSlice"
import authReducer from './slice/authSlice'


export const store = configureStore({
    reducer: {
        addMockupData: dataSlice,
        toggleName: navSlice,
        cart: cartReducer,
        auth: authReducer,
    },
})