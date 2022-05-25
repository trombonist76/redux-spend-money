import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBillionaires = createAsyncThunk("characters/getBillionaires", async () => {
    const response = await axios(process.env.REACT_APP_API_URL)
    return response.data.map(person=>{person.archivedWorth *= 10**6; return person})
})

const billionairesSlice = createSlice({
    name:"billionaires",
    initialState:{
        billionaires:[],
        currentBillionaire:{}
    },
    reducers:{
        selectBillionaire : (state,action) => {
            state.currentBillionaire = action.payload
            localStorage.setItem("currentBillionaire",JSON.stringify(action.payload))
        }
    },
    extraReducers:{
        [fetchBillionaires.fulfilled] : (state,action) => {
            state.billionaires = action.payload
        },

        [fetchBillionaires.rejected] : (state,action) => {
            
        },

        [fetchBillionaires.pending] : (state,action) => {
            
        }
    }
})

export const {selectBillionaire} = billionairesSlice.actions
export default billionairesSlice.reducer
