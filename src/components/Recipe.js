import React, { useState } from 'react'
import Modal  from 'react-modal'
import { useDispatch } from 'react-redux'
import { EDIT_RECIPE_NAME, EDIT_RECIPE_INGREDIENTS, EDIT_RECIPE_INSTRUCTIONS, EDIT_RECIPE_NOTES, deleteRecipe } from '../features/recipeslice'





const Recipe = ({recipeId, name, instructions, ingredients, notes}) => {
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
        if(newName !== ''){
            dispatch(EDIT_RECIPE_NAME({ recipeId: recipeId, name: newName }))
            
        }
        if(newIngredients !== '') {
            dispatch(EDIT_RECIPE_INGREDIENTS({ recipeId: recipeId, ingredients: newIngredients }))
        }
        if(newInstructions !== ''){
            dispatch(EDIT_RECIPE_INSTRUCTIONS({ recipeId: recipeId, instructions: newInstructions }))

        }
        if(newNotes !== ''){
            dispatch(EDIT_RECIPE_NOTES({ recipeId: recipeId, notes: newNotes }))
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


    

    

    return (
        
        <div>
            {name && <div>Name: {name}</div>}
            {ingredients && <div>Ingredients: {ingredients}</div>}
            {instructions && <div>Instructions: {ingredients}</div>}
            {notes && <div>Notes: {notes}</div>}

            <button onClick={() => {
                dispatch(deleteRecipe({recipeId}))
            }}>Delete</button>
            <button onClick={modalOpen}>Edit</button>
            
        <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={modalClose}
                >
                <h1>Edit Recipe</h1>
                <h2>Name:</h2><p>{name}</p>
                <h2>Ingredients:</h2><p>{ingredients}</p>
                <h2>Instructions:</h2><p>{instructions}</p>
                <h2>Notes:</h2><p>{notes}</p>
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
                
                    
                

                <button onClick={(() =>saveEdits(newName, newIngredients, newInstructions, newNotes, recipeId))}>Save</button>

        </Modal>
        
        </div>
    )
}

export default Recipe