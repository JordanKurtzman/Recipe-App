import React, { useState, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ErrorBoundary } from 'react-error-boundary'
import RecipeList from './RecipeList'
import AddRecipe from './AddRecipe'


const ErrorFallBack = ({ error }) => {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>

        </div>

    )
}

const initialRecipeState = {
    recipes: []
}

const recipeReducer = (prevState, action) => {
    switch(action.type){
        case 'ADD_RECIPE': {
            const newState = {
                recipes: [...prevState.recipes, action.payload ]
            }
            return newState
        }
        case 'DELETE_RECIPE': {
            const newState = {
                recipes: prevState.recipes.filter(recipe => recipe.id !== action.payload)
            }
            return newState

        }
        
    }
}



const RecipeApp = () => {

    const [recipesState, dispatch] = useReducer(recipeReducer, initialRecipeState)
    

    const addRecipe = (name, ingredients, instructions, notes, tags) => {
        const date = new Date()
        const newRecipe = {
            name: name,
            ingredients: ingredients,
            instructions: instructions,
            notes: notes,
            id: uuidv4(),
            createdAt: date.toLocaleDateString(),
            tags: tags
        }
        dispatch({type: 'ADD_RECIPE', payload: newRecipe})
        console.log(recipesState)
    }

    const deleteRecipe = (id) => {
        dispatch({type: 'DELETE_RECIPE', payload: id})
        console.log('delete')
    }
    const editRecipe = () => {
        
    }

    
 

   

    




    return (
        <div>

            <h1>Recipes</h1>
            <ErrorBoundary
                FallbackComponent={ErrorFallBack}>
                <RecipeList
                    recipesState={recipesState}
                    addRecipe={addRecipe}
                    deleteRecipe={deleteRecipe}
                    />

            </ErrorBoundary>







            <AddRecipe
                addRecipe={addRecipe}
            />



        </div>
    );
}

export default RecipeApp;
