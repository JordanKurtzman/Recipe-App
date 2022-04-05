import React, {useState, useEffect} from 'react'
import {EDIT_RECIPE_NAME} from '../features/recipeslice'
import { useDispatch } from 'react-redux'
import Recipe from './Recipe'
import { useLocation } from 'react-router-dom'

const EditRecipe = (props) => {

    const [editedName, setName] = useState('')
    const [editedIngredients, setIngredients] = useState('')
    const [editedInstructions, setInstructions] = useState('')
    const [editedNotes, setNotes] = useState('')
    const [tag, setTag] = useState('')
    const [editedTags, setTags] = useState('')  

    const dispatch = useDispatch()
    const location = useLocation()
    const state = location.state


    
    const handleNameChange = (e) => {
        let editedName = e.target.value
        setName(editedName)
    }
    const handleIngredientsChange = (e) => {
        let editedIngredients = e.target.value
        setIngredients(editedIngredients)
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
            <Recipe />
            <h2>Edit Recipe</h2>
            <input
            type='text'
            onChange={handleNameChange}
            value={state.name}
            placeholder={state.name}
            />
            <button onClick={dispatch(EDIT_RECIPE_NAME(editedName))}>Save</button>
        </div>
    )

    
    
}

    export default EditRecipe