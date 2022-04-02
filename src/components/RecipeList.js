import React from 'react'
import Recipe from './Recipe'


const RecipeList = ({recipes, addRecipe, deleteRecipe}) => {
    return (
        <div>
    {recipes.map((recipe) => {
        return <Recipe 
        name={recipe.name}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        notes={recipe.notes}
        id={recipe.id}
        createdAt={recipe.createdAt}
        tags={recipe.tags}
        deleteRecipe={deleteRecipe}
        addRecipe={addRecipe}
        
        
        />
    })}            

        
        </div>
    )
}

export default RecipeList