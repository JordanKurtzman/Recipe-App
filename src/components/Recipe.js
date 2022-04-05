import React, { useState } from 'react'
import Modal  from 'react-modal'
import { useDispatch } from 'react-redux'
import { EDIT_RECIPE_NAME, EDIT_RECIPE_INGREDIENTS, EDIT_RECIPE_INSTRUCTIONS, EDIT_RECIPE_NOTES } from '../features/recipeslice'

const Recipe = ({id, name, instructions, ingredients, notes, tags, createdAt, deleteRecipe}) => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [newName, setName] = useState('')
    const [newIngredients, setIngredients] = useState('')
    const [newInstructions, setInstructions] = useState('')
    const [newNotes, setNotes] = useState('')
    const dispatch = useDispatch()

    const modalOpen = () => {
        setIsOpen(true)
    }

    const modalClose = () => {
        setIsOpen(false)
    }
    const saveEdits = (newName, newIngredients, newInstructions, newNotes, id) => {
        dispatch(EDIT_RECIPE_NAME({id: id, name: newName}))
        dispatch(EDIT_RECIPE_INGREDIENTS({ id: id, ingredients: newIngredients }))
        dispatch(EDIT_RECIPE_INSTRUCTIONS({ id: id, instructions: newInstructions }))
        dispatch(EDIT_RECIPE_NOTES({ id: id, notes: newNotes }))
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

    return (
        <div>
            <p>{name}</p>
            <p>{ingredients}</p>
            <p>{instructions}</p>
            <p>{notes}</p>
            <p>{createdAt}</p>
        <button onClick={(() => deleteRecipe(id))}>Delete</button>
        <button onClick={modalOpen}>Edit</button>
        <Modal
                isOpen={modalIsOpen}
                onRequestClose={modalClose}
                >
                <h1>Edit Recipe</h1>
                <p>{name}</p>
                <input
                    type="text"
                    onChange={handleNameChange}/>
                <p>{ingredients}</p>
                <input
                type="text"
                onChange={handleIngredientsChange}/>
                <p>{instructions}</p>
                <input
                    type="text"
                    onChange={handleInstructionsChange} />
                <p>{notes}</p>
                <input
                    type="text"
                    onChange={handleNotesChange} />
                <button onClick={(() =>saveEdits(newName, newIngredients, newInstructions, newNotes, id))}>Save</button>
        </Modal>
        
        </div>
    )
}

export default Recipe