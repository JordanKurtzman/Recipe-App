import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import {ErrorBoundary } from 'react-error-boundary'

const ErrorFallBack = ({error}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
  
    </div>

  )
}

function App() {

  const [recipes, setRecipes] = useState([
    
  ])

  


  

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
    const newRecipes = [...recipes, newRecipe]
    setRecipes(newRecipes)
  }

  const deleteRecipe = (id) => {
    const newRecipes = recipes.filter((recipe) => recipe.id !== id)
    setRecipes(newRecipes)
  }


  

  return (
    <div>
    <h1>Recipes</h1>
    <ErrorBoundary
    FallbackComponent={ErrorFallBack}>
        <RecipeList
          recipes={recipes}
          addRecipe={addRecipe}
          deleteRecipe={deleteRecipe} />
    
    </ErrorBoundary>
    


    



    <AddRecipe 
    addRecipe={addRecipe}
    />
    
  
      
    </div>
  );
}

export default App;
