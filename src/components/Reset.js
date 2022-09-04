import React, {useState, useEffect} from 'react'
import { auth } from '../firebase-config'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { sendPasswordReset } from '../features/authentication'
import { useDispatch } from 'react-redux';

const Reset = () => {
    const [email, setEmail] = useState('')
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate

    useEffect(() => {
        if(loading) return;
        if(user) navigate('/dashboard')
    }, [user, loading])

    const dispatch = useDispatch()

    return (
        <div>
            <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            />
            <button onClick={() => dispatch(sendPasswordReset(email))}>Send password reset email</button>
            <div>Don't have an account? <Link to="/register">register</Link> here</div>
        </div>
    )
}

export default Reset