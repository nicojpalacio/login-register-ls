
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return <div>
    Página de inicio
    <Link to="/login">Ir a la página de inicio de sesión</Link>
  </div>;
};

export default Home;
