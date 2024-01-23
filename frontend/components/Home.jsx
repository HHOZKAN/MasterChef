import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/userSlice'; // Assurez-vous que le chemin vers le fichier d'actions est correct

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <div>
      <header>
        <nav>
          <div>
            <Link to="/login">Login</Link>
            <button type="button" onClick={handleLogout}>Logout</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Home;