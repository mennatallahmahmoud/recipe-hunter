import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("categoriesSlice/fetchCategories", async() => {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const res = await data.json();
    return res;
})

const categoriesSlice = createSlice({
    initialState: [],
    name: "categoriesSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default categoriesSlice.reducer;