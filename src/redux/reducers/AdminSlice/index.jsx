import { createSlice } from "@reduxjs/toolkit"

const initialState={
    user:JSON.parse(localStorage.getItem("user")) ||{},
    pass:JSON.parse(localStorage.getItem("pass")) ||"111"
}
export const AdminSlice=createSlice({
    name:"ADMIN",
    initialState,
    reducers:{
        createUser(state,action){
            state.user=action.payload
            localStorage.setItem(   "user",JSON.stringify(state.user))
        },
         logAdmin(state, action) {
            state.user = {};
        
            localStorage.removeItem("user");
        },
        logPass(state, action) {
            state.pass=action.payload

            localStorage.setItem( "pass",JSON.stringify(action.payload))
        }
    }
})
export const {createUser,logAdmin,logPass}=AdminSlice.actions
export default AdminSlice.reducer
