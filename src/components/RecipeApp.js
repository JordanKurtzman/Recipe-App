import React, {useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ErrorBoundary } from 'react-error-boundary'
import RecipeList from './RecipeList'
import AddRecipe from './AddRecipe'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_RECIPE, DELETE_RECIPE } from '../features/recipeslice';
import {db } from '../firebase-config'
import { collection, addDoc, getDoc } from 'firebase/firestore'



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
    

    
    

    const addRecipe = (name, ingredients, instructions, notes) => {
        const date = new Date()
        const newRecipe = {
            name: name,
            ingredients: ingredients,
            instructions: instructions,
            notes: notes,
            id: uuidv4(),
            date: date.toLocaleDateString(),
            createdAt: Date.now(),
            
        }
        dispatch(ADD_RECIPE(newRecipe))
        console.log(recipes)
        
    }

    const deleteRecipe = (id) => {
        dispatch(DELETE_RECIPE(id))
        console.log('delete')
    }
    

    
 

   

    




    return (
        <div className="recipeapp">

            <h1 className='recipeapp__heading'>Recipes</h1>
            <div className="recipeapp__container">
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
            



        </div>
    );
}

export default RecipeApp;
