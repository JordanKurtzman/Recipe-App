import React, {useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ErrorBoundary } from 'react-error-boundary'
import RecipeList from './RecipeList'
import AddRecipe from './AddRecipe'
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes, addRecipeToFirestoreAndRedux } from '../features/recipeslice';
import { logout } from '../features/authentication';
import { getAuth } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";





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
    const auth = getAuth()
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);



    useEffect(() => {
        dispatch(getRecipes())
        console.log(recipes);
    }, []);
   

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        
    }, [user, loading])



  






    


    


 
    

    
    

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
        dispatch(addRecipeToFirestoreAndRedux(newRecipe))
        
    }

    

    return (
        <div className="recipeapp">

            <h1 className='recipeapp__heading'>Recipes</h1><button onClick={logout}>Log out</button>
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
