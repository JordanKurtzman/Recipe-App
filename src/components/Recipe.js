import React, { useState } from 'react'
import Modal  from 'react-modal'
import { useDispatch } from 'react-redux'
import { EDIT_RECIPE_NAME, EDIT_RECIPE_INGREDIENTS, EDIT_RECIPE_INSTRUCTIONS, EDIT_RECIPE_NOTES, EDIT_RECIPE_TAG } from '../features/recipeslice'

const Recipe = ({id, name, instructions, ingredients, notes, tags, createdAt, deleteRecipe}) => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [newName, setName] = useState('')
    const [newIngredients, setIngredients] = useState('')
    const [newInstructions, setInstructions] = useState('')
    const [newNotes, setNotes] = useState('')
    const [newTag, setTag] = useState('')
    const [newTags, setNewTags] = useState([])
    const dispatch = useDispatch()

    const modalOpen = () => {
        setIsOpen(true)
    }

    const modalClose = () => {
        setIsOpen(false)
    }
    const saveEdits = (newName, newIngredients, newInstructions, newNotes, id, newTags) => {
        if(newName !== ''){
            dispatch(EDIT_RECIPE_NAME({ id: id, name: newName }))
        }
        if(newIngredients !== '') {
            dispatch(EDIT_RECIPE_INGREDIENTS({ id: id, ingredients: newIngredients }))
        }
        if(newInstructions !== ''){
            dispatch(EDIT_RECIPE_INSTRUCTIONS({ id: id, instructions: newInstructions }))

        }
        if(newNotes !== ''){
            dispatch(EDIT_RECIPE_NOTES({ id: id, notes: newNotes }))
        }
            
        
        
        modalClose()
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
            {name && <p>Name: {name}</p>}
            {ingredients && <p>Ingredients: {ingredients}</p>}
            {instructions && <p>Ingredients: {ingredients}</p>}
            {notes && <p>Notes: {notes}</p>}
            {tags && <p>Tags:{tags.map((tag, index) => {
                return <span key={index}>{tag}</span>
            })}</p>}
        <button onClick={(() => deleteRecipe(id))}>Delete</button>
        <button onClick={modalOpen}>Edit</button>
        <Modal
                isOpen={modalIsOpen}
                onRequestClose={modalClose}
                >
                <h1>Edit Recipe</h1>
                <h2>Name:</h2><p>{name}</p>
                <h2>Ingredients:</h2><p>{ingredients}</p>
                <h2>Instructions:</h2><p>{instructions}</p>
                <h2>Notes:</h2><p>{notes}</p>
                <h2>Tags:</h2><p>Tags:{tags.map((tag) => {
                    return <span>{tag}</span>
                })}</p>
                <input
                    type="text"
                    placeholder="name"
                    onChange={handleNameChange}/>
                
                <input
                type="text"
                placeholder='ingredients'
                onChange={handleIngredientsChange}/>
                
                <input
                    type="text"
                    placeholder="instructions"
                    onChange={handleInstructionsChange} />
                
                <input
                    type="text"
                    placeholder="notes"
                    onChange={handleNotesChange} />
                    
                

                <button onClick={(() =>saveEdits(newName, newIngredients, newInstructions, newNotes, id, newTags))}>Save</button>

        </Modal>
        
        </div>
    )
}

export default Recipe