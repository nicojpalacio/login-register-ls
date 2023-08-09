
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Professionals from './pages/Professionals';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const userData = JSON.parse(localStorage.getItem('userData'));
  const isProfessional = userData && userData.userType === 'profesional';

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
        {isProfessional && (
          <Route path="/professionals" element={<Professionals />} /> // Ruta privada para profesionales
        )}     
      </Routes>
    </Router>
  );
};

export default App;