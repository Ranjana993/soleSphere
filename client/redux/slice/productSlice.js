import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [] // Your initial state here
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload
    },
    removeProduct(state, action) {
      state.products = state.products.filter(product => product.id !== action.payload)
    }
  }
})

export const { setProducts, removeProduct } = productSlice.actions
export default productSlice.reducer
