import React, {useState} from 'react'

const AddRecipe = ({addRecipe}) => {
    const [recipeText, setRecipeText] = useState({
        name: '',
        ingredients: '',
        instructions: '',
        notes: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addRecipe()
    }

    const handleNameChange = (e) => {
        setRecipeText((prevState) => ({...prevState, name: e.target.value}))
    }
    const handleIngredientsChange = (e) => {
        setRecipeText((prevState) => ({...prevState, ingredients: e.target.value }))
    }
    const handleInstructionsChange = (e) => {
        setRecipeText((prevState) => ({...prevState, instructions: e.target.value }))
    }
    const handleNotesChange = (e) => {
        setRecipeText((prevState) => ({...prevState, notes: e.target.value }))
    }

    return (
        <div>
        <h2>Add a recipe:</h2>
        <form>
                <input
                    type="text"
                    placeholder='name'
                    onChange={handleNameChange}
                    value={recipeText.name}
                />
                <textarea
                    rows={20}
                    placeholder="ingredients"
                    onChange={handleIngredientsChange}
                    value={recipeText.ingredients}
                />
                <textarea
                    rows={20}
                    placeholder="instructions"
                    onChange={handleInstructionsChange}
                    value={recipeText.instructions}
                />
                <textarea
                    rows={20}
                    placeholder="notes"
                    onChange={handleNotesChange}
                    value={recipeText.notes}
                />
                <button onClick={handleSubmit}>Add Recipe</button>
        </form>
        
        </div>
    )
}

export default AddRecipe