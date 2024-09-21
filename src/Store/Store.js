
import {configureStore} from '@reduxjs/toolkit'
import menuListReducer from './MenuSlice'
import cartSliceReducer from './CartSlice'
import authStateReducer from './AuthStatus'

const store =configureStore({
    reducer:{
        menuList:menuListReducer,
        cartSlice:cartSliceReducer,
        authState:authStateReducer,
    }
})

export default store