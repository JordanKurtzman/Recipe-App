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
import ErrorFallBack from './ErrorFallback';



const RecipeApp = () => {

    const dispatch = useDispatch()
    const recipes = useSelector((state) => state.recipes)
    const auth = getAuth()
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth)

    const uid = useSelector(state => state.users.uid)

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        
    }, [user, loading])

    useEffect(() => {
            dispatch(getRecipes(uid))
            console.log(uid)
  
    }, [dispatch, uid])

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
