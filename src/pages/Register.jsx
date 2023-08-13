import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import './Register.css';


const Register = () => {
  const [dni, setDni] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("paciente");
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); 
  
  const handleRegister = () => {
    const newUserData = {
      dni,
      phoneNumber,
      password,
      userType,
      username
    };
  
    
    const existingUsers = JSON.parse(localStorage.getItem('userAccounts')) || [];
    
    
    existingUsers.push(newUserData);
    
    
    localStorage.setItem('userAccounts', JSON.stringify(existingUsers));
  
    alert('Registro exitoso!');
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2>Crear cuenta</h2>
      <input
        type="text"
        className="register-input"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        className="register-input"
        placeholder="DNI"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />
      <input
        type="text"
        className="register-input"
        placeholder="Número telefónico"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="password"
        className="register-input"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select className="register-select" value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="paciente">Paciente</option>
        <option value="profesional">Profesional</option>
      </select>
      <button className="register-button" onClick={handleRegister}>Crear cuenta</button>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login" className="register-link">Iniciar sesión</Link>
      </p>
    </div>
  );
};

export default Register;
