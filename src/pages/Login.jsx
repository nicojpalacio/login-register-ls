import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.username === username && userData.password === password) {
      localStorage.setItem('isLoggedIn', 'true'); // Cambia la marca de inicio de sesión
      setIsLoggedIn(true);
      navigate('/dashboard');
    } else {
      alert('Credenciales inválidas. Por favor, verifica tus datos.');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <p>¿No tienes una cuenta? <Link to="/register">Crear una cuenta</Link></p>
    </div>
  );
};

export default Login;
