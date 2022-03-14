import React, {useState} from 'react'

const EditRecipe = () => {

    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [notes, setNotes] = useState('')
    const [tag, setTag] = useState('')
    const [tags, setTags] = useState([])  
    
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
    const handleTagChange = (e) => {
        setTag(e.target.value)
    }

    
    (<div>
        <h2>Edit a recipe:</h2>
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







    </div>)}

    export default EditRecipe