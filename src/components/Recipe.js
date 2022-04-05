import React, { useState } from 'react'
import Modal  from 'react-modal'
import { useDispatch } from 'react-redux'
import { EDIT_RECIPE_NAME } from '../features/recipeslice'

const Recipe = ({id, name, instructions, ingredients, notes, tags, createdAt, deleteRecipe}) => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [newName, setName] = useState('')
    const dispatch = useDispatch()

    const modalOpen = () => {
        setIsOpen(true)
    }

    const modalClose = () => {
        setIsOpen(false)
    }
    const saveEdits = (newName, id) => {
        dispatch(EDIT_RECIPE_NAME({id: id, name: newName}))
        modalClose()
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log(newName)
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
                <button onClick={(() =>saveEdits(newName, id))}>Save</button>
        </Modal>
        
        </div>
    )
}

export default Recipe