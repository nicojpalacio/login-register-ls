import { Link } from 'react-router-dom';
import { useUserContext } from '../utils/UserContext';
import React from 'react';

const Professionals = () => {
  const { userData } = useUserContext();
  return (
    <div>
      <h2>Página de profesionales</h2>
      <p>Bienvenido a la página exclusiva para profesionales registrados.</p>
      <div>
      <h2>Dashboard</h2>
      {userData ? (
        <div>
          <h3>Tus datos:</h3>
          <p>DNI: {userData.dni}</p>
          <p>Número de teléfono: {userData.phoneNumber}</p>
          <p>Tipo de usuario: {userData.userType}</p>
        </div>
      ) : (
        <p>No se encontraron datos de usuario.</p>
      )}
      <button>
        <Link to="/login">Cerrar sesión</Link>
      </button>
    </div>
    </div>
  );
};

export default Professionals;
