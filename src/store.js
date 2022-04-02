import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from './features/recipeslice'

export const store = configureStore({
    reducer: recipeReducer,
})