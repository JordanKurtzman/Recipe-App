import React from 'react'

const Recipe = ({id, name, instructions, ingredients, notes, createdAt, deleteRecipe}) => {
    


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