import { configureStore, combineReducers } from "@reduxjs/toolkit";
import recipeReducer from './features/recipeslice'
import userReducer from './features/authentication'
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    recipes: recipeReducer,
    users: userReducer
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger]
})