import React, {useEffect, useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { auth } from '../firebase-config'
import { registerWithEmailAndPassword, signInWithGoogle } from '../features/authentication';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName ] = useState('')
    const[user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    

   

    useEffect(() => {
        if (loading) return;
        if (user) navigate('/dashboard')
    }, [user, loading])

   
    return(
        <div>
            <input
            type="text"
            value={name}
                onChange={(e) => setName(e.target.value)}
            placeholder="Your name"   
             
            />
            <input
            type='email'
            value={email}
            placeholder='your email'
            onChange={(e) => setEmail(e.target.value)}
            
             />
            <input
            type="text"
            value={password}
            placeholder='your password'
            onChange={(e) => setPassword(e.target.value)}
            
            />
            <button onClick={() => registerWithEmailAndPassword(email, password, name)}>Register</button>
            <button onClick={signInWithGoogle}>Register with google</button>
        </div>
    )




    

}

export default Register