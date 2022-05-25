import { createSlice } from "@reduxjs/toolkit";
import products from "../products.json"



const billionairesSlice = createSlice({
    name: "products",
    initialState: {
        items: products,
    },
    reducers: {
        addToCart: (state, action) => {
            let product = state.items.find(product=> product.title === action.payload.title)
            product.amount += 1
        },
        removeFromCart: (state, action) => {
            if (action.payload.amount > 0) {
                let product = state.items.find(product=> product.title === action.payload.title)
                product.amount -= 1
            } else {
                state.items.filter(product => product.title !== action.payload.title)
            }

        },
        removeAllAmount: (state, action) => {
            let product = state.items.find(product=> product.title === action.payload.title)
                product.amount = 0
          
        }
    },

})

export const { addToCart, removeFromCart, removeAllAmount } = billionairesSlice.actions
export default billionairesSlice.reducer
