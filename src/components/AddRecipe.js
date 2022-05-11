import React, {useState} from 'react'

const AddRecipe = ({addRecipe}) => {
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [notes, setNotes] = useState('')
  

    const handleSubmit = () => {
        addRecipe(name, ingredients, instructions, notes)
        setName('')
        setIngredients('')
        setInstructions('')
        setNotes('')
        
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleIngredientsChange = (e) => {
        setIngredients(e.target.value)
    }
    const handleInstructionsChange = (e) => {
        setInstructions(e.target.value)
    }
    const handleNotesChange = (e) => {
        setNotes(e.target.value)
    }
    
   
    

    return (
        <div className='addform'>
        <h2 className='addform__heading'>Add a recipe:</h2>
        
                <input
                    type="text"
                    placeholder='name'
                    onChange={handleNameChange}
                    value={name}
                />
                <textarea
                    rows={20}
                    placeholder="ingredients"
                    onChange={handleIngredientsChange}
                    value={ingredients}
                />
                <textarea
                    rows={20}
                    placeholder="instructions"
                    onChange={handleInstructionsChange}
                    value={instructions}
                />
               
                <textarea
                    rows={20}
                    placeholder="notes"
                    onChange={handleNotesChange}
                    value={notes}
                />
                
               
            <button className="button" onClick={handleSubmit}>Add Recipe</button>
        
        
        </div>
    )
}

export default AddRecipe