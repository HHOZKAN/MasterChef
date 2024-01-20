import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from '../components/Home';
import Login from '../components/Login';
import CreateAccountPage from '../components/CreateAccount';
import ProfilePage from '../components/ProfilPage';
import PrivateRoute from '../components/PrivateRoute';
import { loginUser } from '../features/userSlice'; 
import { restoreUser } from '../features/userSlice'; 

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(restoreUser(token)); // dispatchez l'action avec le token
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccountPage />} />

        <Route path="/profil" element={<ProfilePage />} />      </Routes>
    </Router>
  );
}

export default App;