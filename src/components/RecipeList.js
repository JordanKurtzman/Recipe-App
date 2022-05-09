import React, {useState} from 'react'
import Recipe from './Recipe'
import { SORT_ALPHABETICALLY, SORT_NEW_TO_OLD, SORT_OLD_TO_NEW } from '../features/recipeslice'
import { useDispatch } from 'react-redux'



const RecipeList = ({recipes, addRecipe, deleteRecipe}) => {
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
        {recipes.length > 0 && <div className="recipetable__labels">
            <div>Name</div>
            <div>Ingredients</div>
            <div>Instructions</div>
            <div>Notes</div>
        </div>}
        

    {recipes.map((recipe, index) => {
        return <Recipe 
        name={recipe.name}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        notes={recipe.notes}
        id={recipe.id}
        createdAt={recipe.createdAt}
        date={recipe.date}
        deleteRecipe={deleteRecipe}
        addRecipe={addRecipe}
        key={index}
        
        
        />
    })}            

            {recipes.length > 0 && <div>
                <button onClick={(() => dispatch(SORT_ALPHABETICALLY()))}>Sort A - Z</button>
                <button onClick={(() => buttonChange())}>{buttonText}</button>
                </div>
        }
        
        </div>
    )
}

export default RecipeList