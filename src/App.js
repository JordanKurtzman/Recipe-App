import React from 'react'
import RecipeApp from './components/RecipeApp';
import {Route, Routes} from 'react-router-dom'
import EditRecipe from './components/EditRecipe'


function App() {

  return (
    <div>
    <Routes>
        <Route path="/" element={<RecipeApp />}/>
      <Route path="/edit" element={<EditRecipe />}/>
    </Routes>
      
    </div>
  )
    
      
    

  
  

}

export default App;
