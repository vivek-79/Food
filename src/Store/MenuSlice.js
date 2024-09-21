import { createSlice } from "@reduxjs/toolkit"


const initialState={
    status:'all',
    total:0,
}

const MenuSlice=createSlice({

    name:'menuList',
    initialState,
    reducers:{
        menuCurrent:(state,action)=>{
            state.status=action.payload
            console.log()
        },
        totalCart:(state,action)=>{
            state.total=action.payload
        }
    }
})

export default MenuSlice.reducer;
export const {menuCurrent,totalCart} = MenuSlice.actions