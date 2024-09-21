
import {createSlice} from '@reduxjs/toolkit'

const initialState ={}

const cartSlice =createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        selected:(state,action)=>{
            const {imag,price,name}=action.payload
            if(!state[imag]){
                state[imag]={
                    name,
                    price,
                    quantity:1,
                };

            }
            else{
                state[imag].quantity +=1;
            }
        },
        deleted:(state,action)=>{
            const {imag}=action.payload
            if(state[imag]){
                state[imag].quantity -=1
            }
            if(state[imag].quantity===0){
                delete state[imag]
            }
        },
    },
})


export default cartSlice.reducer;
export const {selected,deleted} =cartSlice.actions