

import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status:false,
    userData:null
}

const AuthStatus =createSlice({

    initialState,
    name:'authState',

    reducers:{
        logIn:(state,action)=>{
            state.status=true,
            state.userData=action.payload
        },
        LogOut:(state,action)=>{
            state.status=false,
            console.log("Logged out, status:", state.status);
        }
    }
})

export default AuthStatus.reducer

export const {logIn,LogOut} =AuthStatus.actions