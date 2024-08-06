import { createSlice } from "@reduxjs/toolkit"

const initialState={
    basket: JSON.parse(localStorage.getItem("basket")) || [],
}
export const BasketSlice=createSlice({
    name:"Basket",
    initialState,
    reducers:{
        CreateBasket(state,action){
            state.product=[...state.basket,action.payload]
            localStorage.setItem( "basket", JSON.stringify(state.product))
        },
        deleteBas(state,action){
            let del = state.basket.filter((el)=>el.id!==action.payload)
            state.basket=del
            localStorage.setItem( "basket", JSON.stringify(del))
        }

    }
})
export const {CreateBasket,deleteBas}=BasketSlice.actions
export default BasketSlice.reducer