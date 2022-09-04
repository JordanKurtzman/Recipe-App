import React from 'react'
import RecipeApp from './components/RecipeApp';
import Login from './components/Login'
import {Route, Routes} from 'react-router-dom'
import Register from './components/Register';
import Reset from './components/Reset';
import {onAuthStateChanged} from 'firebase/auth'
import {store } from './store'
import { LOGIN, LOGOUT } from './features/authentication'
import { auth } from './firebase-config'


function App() {

  return (
    <div>
    <Routes>
        <Route path="/dashboard" element={<RecipeApp />}/>
        <Route path="/" element={ <Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/reset" element={<Reset />}/>


    </Routes>
      
    </div>
  )
    
      
    

  
  

}


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('logged in')
    
    // ...
  } else {
    // User is signed out
    // ...
    console.log('logged out')
    
    
  }
});


export default App;
