import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false'); // Cambia la marca de inicio de sesión
    navigate('/login'); // Redirige a la página de inicio de sesión
  };

  return (
    <div>
      <h2>Panel de control</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;
