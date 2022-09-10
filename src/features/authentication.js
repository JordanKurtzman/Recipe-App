import { GoogleAuthProvider,
    
     
      signInWithEmailAndPassword,
       createUserWithEmailAndPassword,
       sendPasswordResetEmail,
       signOut,
       signInWithPopup,
       
       
       
     } from 'firebase/auth'
import {
    collection, addDoc, query,
    where,
    getDocs,
setDoc, 
doc } from 'firebase/firestore';
import { auth, db } from '../firebase-config'
import { createSlice } from '@reduxjs/toolkit';





//Sign in with google




const googleProvider = new GoogleAuthProvider();
const googlePopUp = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const signInWithGoogle = () => {
    return (dispatch) => {
        dispatch(googlePopUp())
    }
}




// log in with email and password

export const logInWithEmailAndPassword = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
    }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
    })
}



//Register email and password

export const registerWithEmailAndPassword = async (email, password, name) => {

    try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password)
       
        await setDoc(doc(db, "users", user.uid), { name: name, email: email, uid: user.uid, authProvider: 'email' })
        console.log('registered')
    } catch {
        console.log('error')
        
    }
   
}



//reset password

export const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

//sign out
export const logout = () => {
    signOut(auth).then(() => {
        console.log('sign out successful')
    }).catch((error) => {
        console.log(error)
    })
};










export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        LOGIN: (state, action) => {
            state.user = action.payload;
        },
        LOGOUT: (state) => {
            state.user = null;
        },
    },
});

export const { LOGIN, LOGOUT } = userSlice.actions;

export default userSlice.reducer;
