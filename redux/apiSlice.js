import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getApi = createAsyncThunk(
    'api',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        return response.json();
    }
)

export const apiSlice = createSlice({
    name: 'api',
    initialState:{
        data:[]
    },
    extraReducers:(builder) => {
        builder.addCase(getApi.fulfilled,(state,action) => {
            state.data = action.payload;
        })
    }
})

export default apiSlice.reducer