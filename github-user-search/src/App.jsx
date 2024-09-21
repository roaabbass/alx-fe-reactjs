// src/App.jsx
import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';
import './App.css'; // Importing CSS for styles

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);
    
    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (error) {
      setError('Looks like we can’t find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <Search onSearch={handleSearch} />

        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}

        {user && (
          <div className="user-card">
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="avatar" />
            <h2>{user.name || user.login}</h2>
            {user.bio && <p>{user.bio}</p>}
            <p><strong>Followers:</strong> {user.followers}</p>
            <p><strong>Following:</strong> {user.following}</p>
            <p><strong>Public Repos:</strong> {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
