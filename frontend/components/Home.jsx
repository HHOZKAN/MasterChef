import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Ceci est la page d'accueil de notre application.</p>
      <Link to="/login">Aller à la page de connexion</Link>
    </div>
  );
}

export default Home;