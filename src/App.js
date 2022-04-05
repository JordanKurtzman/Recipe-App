import React from 'react'
import RecipeApp from './components/RecipeApp';
import {Route, Routes} from 'react-router-dom'



function App() {

  return (
    <div>
    <Routes>
        <Route path="/" element={<RecipeApp />}/>

    </Routes>
      
    </div>
  )
    
      
    

  
  

}

export default App;
