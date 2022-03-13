import React, {useState} from 'react'

const AddRecipe = ({addRecipe}) => {
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [notes, setNotes] = useState('')
    const [tag, setTag] = useState ('')
    const [tags, setTags] = useState([])

    const handleSubmit = () => {
        addRecipe(name, ingredients, instructions, notes, tags)
        setName('')
        setIngredients('')
        setInstructions('')
        setNotes('')
        setTags([])
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
    const handleTagChange = (e) => {
        setTag(e.target.value)
    }
    
    

    return (
        <div>
        <h2>Add a recipe:</h2>
        
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
                <label>Add tags to your recipe:</label>
                <input 
                type="text"
                placeholder='tags'
                onChange={handleTagChange}
                value={tag}
                
                onKeyPress={((e) =>{
                    if(e.key === 'Enter'){
                        setTags((prevTags) => setTags([...prevTags, e.target.value]))
                        setTag('')
                    }
                })}
                />
                {tags && tags.map((tag) => {
                    return <p>{tag}</p>
                })}
               
                <button onClick={handleSubmit}>Add Recipe</button>
        
        
        </div>
    )
}

export default AddRecipe