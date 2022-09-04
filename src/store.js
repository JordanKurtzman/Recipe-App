import { configureStore, combineReducers } from "@reduxjs/toolkit";
import recipeReducer from './features/recipeslice'
import userReducer from './features/authentication'

const rootReducer = combineReducers({
    recipes: recipeReducer,
    users: userReducer
})


export const store = configureStore({
    reducer: rootReducer
})