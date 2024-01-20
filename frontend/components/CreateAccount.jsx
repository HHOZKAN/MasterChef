import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';


function CreateAccountPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.user); 
    const { error, loading } = userRegister;

 const handleSubmit = async (event) => {
    event.preventDefault();
    const accountData = { name: username, email, password };
    try {
        const actionResult = await dispatch(registerUser(accountData));
        const user = unwrapResult(actionResult);
        navigate('/'); // Redirige vers la page d'accueil
    } catch (err) {
        console.error('Failed to register the user: ', err);
    }
};
    

    return (
        <form onSubmit={handleSubmit}>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Create Account</button>
        </form>
    );
}
export default CreateAccountPage;