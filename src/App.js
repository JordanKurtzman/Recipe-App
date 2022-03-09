import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import Recipe from './components/Recipe';


function App() {

  const [recipes, setRecipes] = useState([
    {name: 'recipe1',
      ingredients: '',
      instructions: '',
      notes: '',
      id: uuidv4(),
      createdAt: 'March 3rd, 2008'
    },
    {
      name: 'recipe2',
      ingredients: '',
      instructions: '',
      notes: '',
      id: uuidv4(),
      createdAt: '2004'
    }
  ])
  

  const addRecipe = ({name, ingredients, instructions, notes}) => {
    const date = new Date()
    const newRecipe = {
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      notes: notes,
      id: uuidv4(),
      createdAt: date.toLocaleDateString(),
      
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
    <RecipeList 
    recipes={recipes}
    addRecipe={addRecipe}
    deleteRecipe={deleteRecipe}/>


    



    <AddRecipe 
    
    addRecipe={addRecipe}
   

    
    />
    
  
      
    </div>
  );
}

export default App;
