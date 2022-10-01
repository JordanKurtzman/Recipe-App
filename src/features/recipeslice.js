
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, getDocs, deleteDoc, addDoc, query, where, updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

// Read recipes from firestore


// const getRecipesFireStore = async (uid) => {
//         const snapshot = await getDocs(collection(db, `users/${uid}/recipes`))
//         const array = []
//         snapshot.forEach((doc) => {
//             array.push(doc.data())
//         })
//         return array  
// }

// export const getRecipes = () => {
//     return (dispatch, getState) => {
//         const state = getState()
//         const uid = state.users.uid.user
//         return getRecipesFireStore(uid).then((recipes) =>{
//             dispatch(GET_RECIPES(recipes))
//         })
        
//     }
// }

export const getRecipes = createAsyncThunk(
    'user/getRecipes',
    async(_, thunkAPI) => {
        const state = thunkAPI.getState()
        const uid = state.users.uid.user
        const snapshot = await getDocs(collection(db, `users/${uid}/recipes`))
        const array = []
        snapshot.forEach((doc) => {
            array.push(doc.data())
        })
        return array  

        
    }
)






//Add recipes to firestore/redux
const addRecipeFirestore = async (newRecipe, uid) => {
        const docRef = await addDoc(collection(db, `users/${uid}/recipes`), newRecipe)
}


export const addRecipeToFirestoreAndRedux = (newRecipe) => {
    return (dispatch, getState) => {
        const state = getState()
        const uid = state.users.uid.user
        return addRecipeFirestore(newRecipe, uid).then(() => {
            dispatch(ADD_RECIPE(newRecipe))
            
        }).catch((error) => {
            console.log(error)
        })
    }

}


// Delete recipes from firestore, redux
const deleteRecipeFirestore = async ({recipeId, uid}) => {
    const q = query(collection(db, `users/${uid}/recipes`), where("recipeId", "==", `${recipeId}`))
    const querySnapshot = await getDocs(q);
    const deletePromises = querySnapshot.docs.map((d) => deleteDoc(d.ref))
    await Promise.all(deletePromises)
}


export const deleteRecipe = ({recipeId}) => {
    return (dispatch, getState) =>{
        const state = getState()
        const uid = state.users.uid.user
        return deleteRecipeFirestore({recipeId, uid}).then(() =>{
            dispatch(DELETE_RECIPE({recipeId}))
        })
    }
    
}

//Update recipes in firestore
const updateNameInFirestore = async ({newName, recipeId, uid}) => {
   
    const q = query(collection(db, `users/${uid}/recipes`), where("recipeId", "==", `${recipeId}`))
        const querySnapshot = await getDocs(q);
        const updatePromise = querySnapshot.docs.map((d) => updateDoc(d.ref, {name: newName}))
        await Promise.all(updatePromise)
        console.log("Name Updated")
        

}

export const updateName = ({newName, recipeId}) => {
    return (dispatch, getState) => {
        const state = getState()
        const uid = state.users.uid.user
        return updateNameInFirestore({newName, recipeId, uid}).then(() =>{
            dispatch(EDIT_RECIPE_NAME({recipeId: recipeId, name: newName}))
        })
    }
}



const updateNotesinFirestore = async ({newNotes, recipeId}) => {
    
        const q = query(collection(db, "recipes"), where("recipeId", "==", `${recipeId}`))
        const querySnapshot = await getDocs(q);
        const updatePromise = querySnapshot.docs.map((d) => updateDoc(d.ref, { notes: newNotes }))
        await Promise.all(updatePromise)
        console.log("Notes updated")
        
    
}

export const updateNotes = ({ newNotes, recipeId }) => {
    return (dispatch) => {
        return updateNotesinFirestore({ newNotes, recipeId }).then(() => {
            dispatch(EDIT_RECIPE_NOTES({ recipeId: recipeId, notes: newNotes }))
        })
    }
}

const updateIngredientsinFirestore = async ({ newIngredients, recipeId }) => {
    
        const q = query(collection(db, "recipes"), where("recipeId", "==", `${recipeId}`))
        const querySnapshot = await getDocs(q);
        const updatePromise = querySnapshot.docs.map((d) => updateDoc(d.ref, { ingredients: newIngredients }))
        await Promise.all(updatePromise)
        console.log("Ingredients updated")

    
}

export const updateIngredients = ({ newIngredients, recipeId }) => {
    return (dispatch) => {
        return updateIngredientsinFirestore({ newIngredients, recipeId }).then(() => {
            dispatch(EDIT_RECIPE_INGREDIENTS({ recipeId: recipeId, ingredients: newIngredients }))
        })
    }
}

const updateInstructionsinFirestore = async ({ newInstructions, recipeId }) => {
    
        const q = query(collection(db, "recipes"), where("recipeId", "==", `${recipeId}`))
        const querySnapshot = await getDocs(q);
        const updatePromise = querySnapshot.docs.map((d) => updateDoc(d.ref, { instructions: newInstructions }))
        await Promise.all(updatePromise)
        console.log("Instructions updated")

    
}


export const updateInstructions = ({ newInstructions, recipeId }) => {
    return (dispatch) => {
        return updateInstructionsinFirestore({ newInstructions, recipeId }).then(() => {
            dispatch(EDIT_RECIPE_INSTRUCTIONS({ recipeId: recipeId, instructions: newInstructions }))
        })
    }
}
//Redux slice and reducers

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
        extraReducers: (builder) => {
            builder.addCase(getRecipes.fulfilled, (state, { payload }) => {
                state.recipes = payload
            })

        }
        

    },

})

export const { ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE_NAME, EDIT_RECIPE_INGREDIENTS, EDIT_RECIPE_INSTRUCTIONS, EDIT_RECIPE_NOTES, SORT_ALPHABETICALLY, SORT_NEW_TO_OLD, SORT_OLD_TO_NEW, GET_RECIPES } = recipeSlice.actions;

export default recipeSlice.reducer