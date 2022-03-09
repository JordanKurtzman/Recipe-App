import React from 'react'
import Recipe from './Recipe'

const RecipeList = ({recipes, deleteRecipe}) => {
    return (
        <div>
    {recipes.map((recipe, index) => {
        return <Recipe 
        name={recipe.name}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        notes={recipe.notes}
        id={recipe.id}
        createdAt={recipe.createdAt}
        key={recipe.index}
        deleteRecipe={deleteRecipe}
        />
    })}            

        
        </div>
    )
}

export default RecipeList