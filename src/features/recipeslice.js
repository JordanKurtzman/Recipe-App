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
                    return recipe.name = action.payload.name
                }
            })
        },
        EDIT_RECIPE_INGREDIENTS: (state, action) => {
            state.recipes.map((recipe) => {
                if (recipe.id === action.payload.id) {
                    return recipe.ingredients = action.payload.ingredients
                }
            })
        },
        EDIT_RECIPE_INSTRUCTIONS: (state, action) => {
            state.recipes.map((recipe) => {
                if (recipe.id === action.payload.id) {
                    return recipe.instructions = action.payload.instructions
                }
            })
        },
        EDIT_RECIPE_NOTES: (state, action) => {
            state.recipes.map((recipe) => {
                if (recipe.id === action.payload.id) {
                    return recipe.notes = action.payload.notes
                }
            })
        },
        EDIT_RECIPE_TAG: (state, action) => {
            state.recipes.map((recipe) => {
                if (recipe.id === action.payload.id) {
                    state.recipes.tags.map((item) => {
                        return item.tag = action.payload.tag
                    })
                }
            })
        },


    }
})

export const { ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE_NAME, EDIT_RECIPE_INGREDIENTS, EDIT_RECIPE_INSTRUCTIONS, EDIT_RECIPE_NOTES, EDIT_RECIPE_TAG  } = recipeSlice.actions;

export default recipeSlice.reducer