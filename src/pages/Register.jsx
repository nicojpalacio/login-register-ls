import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";


const Register = () => {
  const [dni, setDni] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("paciente"); // Estado para almacenar el tipo de usuario
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
  
    // Obtener los datos existentes del local storage o inicializar un array vacío
    const existingUsers = JSON.parse(localStorage.getItem('userAccounts')) || [];
    
    
    existingUsers.push(newUserData);
    
    
    localStorage.setItem('userAccounts', JSON.stringify(existingUsers));
  
    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    navigate('/login');
  };

  return (
    <div>
      <h2>Crear cuenta</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="DNI"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />
      <input
        type="text"
        placeholder="Número telefónico"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="paciente">Paciente</option>
        <option value="profesional">Profesional</option>
      </select>
      <button onClick={handleRegister}>Crear cuenta</button>
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
      </p>
    </div>
  );
};

export default Register;
