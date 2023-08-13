import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <>
      <header className="header">
        <h1>Proyecto React - Global Learning</h1>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/login">Iniciar sesión</Link>
          <Link to="/register">Registrarse</Link>
        </nav>
      </header>
      <>{children}</>
    </>
  );
};

export default Header;
