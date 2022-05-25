import {createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./productsSlice";

const billionairesSlice = createSlice({
    
    name:"wallet",
    initialState:{
        money:0,
    },
    reducers:{
        setMoney : (state,action) => {
            state.money=action.payload
        },
        
        sellProduct : (state,action) => {
            state.money += action.payload.price

        },

        buyProduct : (state,action) => {
            state.money -= action.payload.price
            
        }
    },

})

export const {setMoney,sellProduct,buyProduct} = billionairesSlice.actions
export default billionairesSlice.reducer
