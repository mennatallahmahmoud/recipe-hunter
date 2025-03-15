import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAllMeals = createAsyncThunk('mealsSlice/fetchAllMeals', async() => {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const res = await data.json();
    return res;
})

const mealsSlice = createSlice({
    initialState: [],
    name: 'mealsSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllMeals.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})


export default mealsSlice.reducer;