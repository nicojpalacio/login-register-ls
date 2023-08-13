import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useUserContext } from '../utils/UserContext';
const Login = () => {
  const { setUserData, setIsLoggedin } = useUserContext();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem('userAccounts')) || [];
    
    const userData = existingUsers.find(
      user => user.username === username && user.password === password
    );
      console.log(userData)
    if (userData) {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedin(true);
        setUserData(userData); 
        if (userData.userType === 'profesional') {
          navigate('/professionals'); 
        } else {
          navigate('/dashboard'); 
        } 
      } else {
        alert('Cuenta inválidas');
      }
    };
  

  return (
    <div className="login-container">
    <h2>Iniciar sesión</h2>
    <input
      type="text"
      className="login-input"
      placeholder="Usuario"
      value={username}
      onChange={e => setUsername(e.target.value)}
    />
    <input
      type="password"
      className="login-input"
      placeholder="Contraseña"
      value={password}
      onChange={e => setPassword(e.target.value)}
    />
    <button className="login-button" onClick={handleLogin}>Iniciar sesión</button>
    <p>No tienes una cuenta? <Link to="/register" className="login-link">Crear una cuenta</Link></p>
  </div>
);
};

export default Login;
