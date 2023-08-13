
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Professionals from './pages/Professionals';
import './App.css';
import { useUserContext } from './utils/UserContext';
const App = () => {
  const {userData, isLoggedIn} = useUserContext();
  return (
    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {userData?.userType === 'paciente' && <Route path="/dashboard" element={<Dashboard />} />}
        {userData?.userType === 'profesional' && <Route path="/professionals" element={<Professionals />} />}
        {!isLoggedIn && <Route path="/dashboard" element={<Navigate to="/login" />} />}
      </Routes>
    </Router>
  );
};

export default App;