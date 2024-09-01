// src/pages/Login.jsx
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login();
    navigate('/profile');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
