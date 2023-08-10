import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem('userAccounts')) || [];
    
    const userData = existingUsers.find(
      user => user.username === username && user.password === password
    );
  
    if (userData) {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
  
        if (userData.userType === 'profesional') {
          navigate('/professionals'); // Redirige a la ruta de profesionales
        } else {
          navigate('/dashboard'); // Redirige al dashboard
        }
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
