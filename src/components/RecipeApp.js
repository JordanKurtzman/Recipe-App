import React, {useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ErrorBoundary } from 'react-error-boundary'
import RecipeList from './RecipeList'
import AddRecipe from './AddRecipe'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_RECIPE, DELETE_RECIPE, deleteRecipeFirestore } from '../features/recipeslice';
import { getRecipes, addRecipeFirestore, deleteRecipeById } from '../features/recipeslice';



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

    useEffect(() => {
        dispatch(getRecipes());
    }, []);
    

    
    

    const addRecipe = (name, ingredients, instructions, notes) => {
        const date = new Date()
        const newRecipe = {
            name: name,
            ingredients: ingredients,
            instructions: instructions,
            notes: notes,
            recipeId: uuidv4(),
            date: date.toLocaleDateString(),
            createdAt: Date.now(),
            
        }
        dispatch(ADD_RECIPE(newRecipe))
        dispatch(addRecipeFirestore(newRecipe)) 
    }

    

    return (
        <div className="recipeapp">

            <h1 className='recipeapp__heading'>Recipes</h1>
            <div className="recipeapp__container">
                <ErrorBoundary
                    FallbackComponent={ErrorFallBack}>
                    <RecipeList
                        recipes={recipes}
                        

                    />

                </ErrorBoundary>







                <AddRecipe
                    addRecipe={addRecipe}
                />
            </div>
            



        </div>
    );
}

export default RecipeApp;
