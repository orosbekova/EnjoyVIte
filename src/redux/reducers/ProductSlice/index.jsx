import { createSlice } from "@reduxjs/toolkit"

const initialState={
    product: JSON.parse(localStorage.getItem("pro")) || [],
}
export const ProductSlice=createSlice({
    name:"PRODUCT",
    initialState,
    reducers:{
        CreateProduct(state,action){
            state.product=action.payload
            localStorage.setItem( "pro", JSON.stringify(state.product))
        }

    }
})
export const {CreateProduct}=ProductSlice.actions
export default ProductSlice.reducer