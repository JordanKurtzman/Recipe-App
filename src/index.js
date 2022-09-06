import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store} from './store'
import { Provider } from 'react-redux';
import './scss/app.scss'
import * as serviceWorker from './serviceWorker';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase-config'
import {LOGIN, LOGOUT} from './features/authentication'




ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  
    
  ,
  document.getElementById('root')
);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('logged in')
    store.dispatch(LOGIN(uid))


    // ...
  } else {
    // User is signed out
    // ...
    console.log('logged out')
    store.dispatch(LOGOUT())


  }
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
