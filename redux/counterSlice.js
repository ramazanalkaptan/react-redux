import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    counter:0,
}
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment : (state) => {
            state.counter += 1
        },
        decrement : (state) => {
            state.counter -= 1
        },
        incrementAmount : (state,action) => {
            state.counter += action.payload
        }
    },
})

export const {increment, decrement, incrementAmount} = counterSlice.actions

export default counterSlice.reducer
