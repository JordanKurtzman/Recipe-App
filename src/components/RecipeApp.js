import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ErrorBoundary } from 'react-error-boundary'
import RecipeList from './RecipeList'
import AddRecipe from './AddRecipe'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_RECIPE, DELETE_RECIPE } from '../features/recipeslice';


const ErrorFallBack = ({ error }) => {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>

        </div>

    )
}





const RecipeApp = () => {

    const dispatch = useDispatch()
    const recipes = useSelector((state) => state.recipes)
    

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
        dispatch(ADD_RECIPE(newRecipe))
        console.log(recipes)
    }

    const deleteRecipe = (id) => {
        dispatch(DELETE_RECIPE(id))
        console.log('delete')
    }
    

    
 

   

    




    return (
        <div>

            <h1>Recipes</h1>
            <ErrorBoundary
                FallbackComponent={ErrorFallBack}>
                <RecipeList
                    recipes={recipes}
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
