// src/App.jsx
import React from 'react';
import Search from './components/Search';
import './App.css'; // Import any necessary CSS for styling

function App() {
  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;
