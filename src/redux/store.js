import { configureStore } from "@reduxjs/toolkit";
import billionairesSlice from "./billionairesSlice";
import productsSlice from "./productsSlice";
import walletSlice from "./walletSlice";


const store = configureStore({
    reducer:{
        billionaires:billionairesSlice,
        products:productsSlice,
        wallet:walletSlice
    }
})

export default store