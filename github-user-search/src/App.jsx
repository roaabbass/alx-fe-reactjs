// src/App.jsx
import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import { fetchUserData } from './services/githubService';

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
        <SearchInput onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {user && (
          <div className="user-card">
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
            <h2>{user.login}</h2>
            <p>{user.bio}</p>
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
