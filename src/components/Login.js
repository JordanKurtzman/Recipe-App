import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle } from '../features/authentication'
import { useDispatch } from 'react-redux';
import { auth } from '../firebase-config'
import { logInWithEmailAndPassword } from '../features/authentication';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, loading, error] = useAuthState(auth)
    const dispatch = useDispatch()
    

    

    const navigate = useNavigate();
    useEffect(() => {
        
        if (user) navigate("/dashboard");
    }, [user, loading]);

    

    



    



    return (
        <div>
            <h1>Recipe Saver</h1>
            
            
                <input type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 />
                 <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 />
                <button onClick={dispatch(signInWithGoogle)}>Login with Google</button>
            <button onClick={() => logInWithEmailAndPassword(auth, email, password)}>Sign in with email</button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
                 
            
        </div>
    )
}

export default Login