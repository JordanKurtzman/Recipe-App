import React, {useState} from 'react'
import Recipe from './Recipe'
import { SORT_ALPHABETICALLY, SORT_NEW_TO_OLD, SORT_OLD_TO_NEW } from '../features/recipeslice'
import { useDispatch } from 'react-redux'



const RecipeList = ({recipes, addRecipe}) => {
    const [buttonText, setButtonText] = useState('Sort New to Old')
    const dispatch = useDispatch()

    const buttonChange = () => {
        if(buttonText === 'Sort New to Old'){
            setButtonText('Sort Old to New')
            dispatch(SORT_NEW_TO_OLD())
        }
        if(buttonText === 'Sort Old to New'){
            setButtonText('Sort New to Old')
            dispatch(SORT_OLD_TO_NEW())
        }
        
    }

    

    
    return (
        <div className="recipetable">
        
            {recipes.length > 0
                 && <div> 
                    <button className="button" onClick={(() => dispatch(SORT_ALPHABETICALLY()))}>Sort A - Z</button>
                    <button className="button" onClick={(() => buttonChange())}>{buttonText}</button>
                 </div>}
                   
                    
                
        
        
    
    {recipes.map((recipe, index) => {
        return <Recipe 
        name={recipe.name}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        notes={recipe.notes}
        recipeId={recipe.recipeId}
        createdAt={recipe.createdAt}
        date={recipe.date}
        addRecipe={addRecipe}
        key={index}
        />
    })}
    
            
        
        </div>
    )
}

export default RecipeList