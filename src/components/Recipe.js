import React from 'react'
import { Link } from 'react-router-dom'

const Recipe = ({id, name, instructions, ingredients, notes, tags, createdAt, deleteRecipe}) => {

    
    


    return (
        <div>
            <p>{name}</p>
            <p>{ingredients}</p>
            <p>{instructions}</p>
            <p>{notes}</p>
            <p>{createdAt}</p>
        <button onClick={(() => deleteRecipe(id))}>Delete</button>
        
        </div>
    )
}

export default Recipe