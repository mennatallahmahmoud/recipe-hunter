import { configureStore } from "@reduxjs/toolkit";
import MealsSlice from "./slices/Meals-Slice";
import CatsSlice from "./slices/Categories-Slice";

const store = configureStore({
    reducer: {
        meals: MealsSlice,
        cats: CatsSlice,
    }
})

export default store;