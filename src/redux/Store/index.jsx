import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "../reducers/AdminSlice";
import ProductSlice  from "../reducers/ProductSlice";
import BasketSlice from "../reducers/BasketSlice";

export const store=configureStore({
    reducer:{
        admin:AdminSlice,
        product:ProductSlice,
        basket:BasketSlice
    }
})