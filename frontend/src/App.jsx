import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import CreateAccountPage from '../components/CreateAccount';
import ProfilePage from '../components/ProfilPage';
import PrivateRoute from '../components/PrivateRoute'; // Assurez-vous que le chemin d'importation est correct
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { restoreUser } from '../features/userSlice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(restoreUser(token));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccountPage />} />
        <Route path="/profil" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;