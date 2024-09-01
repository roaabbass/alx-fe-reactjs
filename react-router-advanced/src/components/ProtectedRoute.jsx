
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {

    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
