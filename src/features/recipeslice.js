import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../firebase-config'

export const getRecipes = createAsyncThunk(
    'recipes/getRecipes',
    async () => {
        const snapshot = await getDocs(collection (db, 'recipes'))
        snapshot.docs.map((doc) => doc.data())
    }
)



export const recipeSlice = createSlice({
    name: 'recipesSlice',
    initialState: {
        recipes: []
        
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
        SORT_ALPHABETICALLY: (state) => {
            state.recipes.sort((a, b) =>{
                if(a.name > b.name) {
                    return 1
                }
                if(a.name < b.name){
                    return -1
                }
                if(a.name === b.name){
                    return 0
                }
            })
        },
        SORT_NEW_TO_OLD: (state) => {
            state.recipes.sort((a,b) => {
                if(a.createdAt < b.createdAt){
                    return 1
                }
                if(a.createdAt > b.createdAt){
                    return -1
                }
                else{
                    return 0
                }
            })
        },
        SORT_OLD_TO_NEW: (state) => {
            state.recipes.sort((a, b) => {
                if (a.createdAt > b.createdAt) {
                    return 1
                }
                if (a.createdAt < b.createdAt) {
                    return -1
                }
                else {
                    return 0
                }
            })
        },
                
        
        
        
        
        


    },
    extraReducers: {
        [getRecipes.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getRecipes.fulfilled]: (state, action) => {
            state.recipes = action.payload
            state.status = 'loading'
        },
        [getRecipes.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
    
})

export const { ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE_NAME, EDIT_RECIPE_INGREDIENTS, EDIT_RECIPE_INSTRUCTIONS, EDIT_RECIPE_NOTES, SORT_ALPHABETICALLY, SORT_NEW_TO_OLD, SORT_OLD_TO_NEW  } = recipeSlice.actions;

export default recipeSlice.reducer