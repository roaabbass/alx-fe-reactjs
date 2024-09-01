// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated, requiredRole }) => {
  const userRole = 'user'; // Simulate user role
  return (
    isAuthenticated && (!requiredRole || userRole === requiredRole)
      ? element
      : <Navigate to="/login" />
  );
};

export default ProtectedRoute;
