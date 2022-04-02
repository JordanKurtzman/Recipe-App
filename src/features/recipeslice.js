import { createSlice } from "@reduxjs/toolkit"



export const recipeSlice = createSlice({
    name: 'recipesSlice',
    initialState: {
        recipes: [],
        sortBy: undefined
    },
    reducers: {
        ADD_RECIPE: (state, action) => {
            state.recipes.push(action.payload)
        },
        DELETE_RECIPE: (state, action) => {
            state.recipes.splice(action.payload, 1)
        },
        EDIT_RECIPE_NAME: (state, action) => {
            state.recipes.map((recipe) => {
                if(recipe.id === action.payload.id){
                    return recipe.name === action.payload.name
                }
            })
        }
    }
})

export const { ADD_RECIPE, DELETE_RECIPE } = recipeSlice.actions;

export default recipeSlice.reducer