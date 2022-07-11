import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { collection, getDocs, deleteDoc, addDoc, doc, query, where } from 'firebase/firestore'
import { db } from '../firebase-config'

export const getRecipes = createAsyncThunk(
    'recipes/getRecipes',
    async () => {
        const snapshot = await getDocs(collection (db, 'recipes'))
        const array = []
        snapshot.forEach((doc) =>{
            array.push(doc.data())
        })
        return array
    }
)

export const addRecipeFirestore = createAsyncThunk(
    'recipes/addRecipe',
    async (newRecipe) => {
        const docRef = await addDoc(collection(db, "recipes"), newRecipe)
        console.log(docRef.data())
        return docRef.data()
    }
)

export const oldDeleteRecipe = ({recipeId}) => {
        return async (dispatch) => {
            const q = query(collection(db, "recipes"), where("recipeId", "==", `${recipeId}`));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async(doc) => {
                console.log(doc.id, " => ", doc.data())
                await deleteDoc(doc)
            });
            dispatch(DELETE_RECIPE({recipeId}))
        }
}

export const deleteRecipe = ({recipeId}) => {
    return async(dispatch) => {
        const q = query(collection(db, "recipes"), where("recipeId", "==", `${recipeId}`))
        const querySnapshot = await getDocs(q);
        const deletePromises = querySnapshot.docs.map((d) => deleteDoc(d.ref))
        await Promise.all(deletePromises)

        console.log("Documents deleted")
        dispatch(DELETE_RECIPE({ recipeId }))


    }
}









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
            state.recipes = state.recipes.filter((recipe) => recipe.recipeId !== action.payload.recipeId)
        },
        EDIT_RECIPE_NAME: (state, action) => {
            state.recipes.map((recipe) => {
                if (recipe.recipeId === action.payload.recipeId) {
                    return recipe.name = action.payload.name
                }
            })
        },
        EDIT_RECIPE_INGREDIENTS: (state, action) => {
            state.recipes.map((recipe) => {
                if (recipe.recipeId === action.payload.recipeId) {
                    return recipe.ingredients = action.payload.ingredients
                }
            })
        },
        EDIT_RECIPE_INSTRUCTIONS: (state, action) => {
            state.recipes.map((recipe) => {
                if (recipe.recipeId === action.payload.recipeId) {
                    return recipe.instructions = action.payload.instructions
                }
            })
        },
        EDIT_RECIPE_NOTES: (state, action) => {
            state.recipes.map((recipe) => {
                if (recipe.recipeId === action.payload.recipeId) {
                    return recipe.notes = action.payload.notes
                }
            })
        },
        SORT_ALPHABETICALLY: (state) => {
            state.recipes.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                }
                if (a.name < b.name) {
                    return -1
                }
                if (a.name === b.name) {
                    return 0
                }
            })
        },
        SORT_NEW_TO_OLD: (state) => {
            state.recipes.sort((a, b) => {
                if (a.createdAt < b.createdAt) {
                    return 1
                }
                if (a.createdAt > b.createdAt) {
                    return -1
                }
                else {
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
    extraReducers: (builder) => {
        builder.addCase(getRecipes.fulfilled, (state, { payload }) => {
            state.recipes = payload
        })
            .addCase(addRecipeFirestore.fulfilled, (state, { payload }) => {
                state.recipes = payload
            })
    }

})

export const { ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE_NAME, EDIT_RECIPE_INGREDIENTS, EDIT_RECIPE_INSTRUCTIONS, EDIT_RECIPE_NOTES, SORT_ALPHABETICALLY, SORT_NEW_TO_OLD, SORT_OLD_TO_NEW } = recipeSlice.actions;

export default recipeSlice.reducer