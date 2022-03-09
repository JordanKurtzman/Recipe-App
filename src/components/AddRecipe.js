import React, {useState} from 'react'

const AddRecipe = ({addRecipe}) => {
    const [recipeText, setRecipeText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addRecipe()
    }

    return (
        <div>
        <h2>Add a recipe:</h2>
        <form>
                <input
                    type="text"
                    placeholder='name'
                />
                <textarea
                    rows={20}
                    placeholder="ingredients"
                />
                <textarea
                    rows={20}
                    placeholder="instructions"
                />
                <textarea
                    rows={20}
                    placeholder="notes"
                />
                <button onClick={handleSubmit}>Add Recipe</button>
        </form>
        
        </div>
    )
}

export default AddRecipe