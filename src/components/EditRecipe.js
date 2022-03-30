// import React, {useState} from 'react'

// const EditRecipe = ({ name, instructions, notes, ingredients, tags, addRecipe}) => {

//     const [editedName, setName] = useState(name)
//     const [editedIngredients, setIngredients] = useState(ingredients)
//     const [editedInstructions, setInstructions] = useState(instructions)
//     const [editedNotes, setNotes] = useState(notes)
//     const [tag, setTag] = useState('')
//     const [editedTags, setTags] = useState(tags)  
    
//     const handleNameChange = (e) => {
//         let editedName = e.target.value
//         setName(editedName)
//     }
//     const handleIngredientsChange = (e) => {
//         let editedIngredients = e.target.value
//         setIngredients(editedIngredients)
//     }
//     const handleInstructionsChange = (e) => {
        
//         setInstructions(e.target.value)
//     }
//     const handleNotesChange = (e) => {
//         setNotes(e.target.value)
//     }
//     const handleTagChange = (e) => {
//         setTag(e.target.value)
//     }

//     return 
    
//     (
//         <div>
//         <h2>Edit a recipe:</h2>
//     <input
//         type="text"
//         placeholder='name'
//         onChange={handleNameChange}
//         value={name}
//     />
//     <textarea
//         rows={20}
//         placeholder="ingredients"
//         onChange={handleIngredientsChange}
//         value={ingredients}
//     />
//     <textarea
//         rows={20}
//         placeholder="instructions"
//         onChange={handleInstructionsChange}
//         value={instructions}
//     />

//     <textarea
//         rows={20}
//         placeholder="notes"
//         onChange={handleNotesChange}
//         value={notes}
//     />







//     </div>)
// }

//     export default EditRecipe