import React from 'react'
import RecipeApp from './components/RecipeApp';
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import {Route, Routes} from 'react-router-dom'
import Register from './components/Register';
import Reset from './components/Reset';



function App() {

  return (
    <div>
    <Routes>
        <Route path="/dashboard" element={
        <ProtectedRoute>
            <RecipeApp />
        </ProtectedRoute>  
        }/>
        <Route path="/" element={ <Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/reset" element={<Reset />}/>


    </Routes>
      
    </div>
  )
    
      
    

  
  

}




export default App;
