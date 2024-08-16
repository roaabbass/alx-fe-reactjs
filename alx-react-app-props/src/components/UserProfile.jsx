// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{userData.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>25</span></p> {/* Replace the age with context data if available */}
      <p>Bio: Loves hiking and photography</p> {/* This can also be part of the context if needed */}
    </div>
  );
}

export default UserProfile;
