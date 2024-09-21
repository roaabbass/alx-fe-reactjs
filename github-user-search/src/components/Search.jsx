// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError('Please enter a valid GitHub username.');
      return;
    }

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      console.error(err); // Log error for debugging
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>} {/* Error message displayed here */}

      {user && !error && ( // Ensure error is not present when displaying user info
        <div className="user-details">
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="avatar" />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio || 'No bio available'}</p>
          <p><strong>Followers:</strong> {user.followers}</p>
          <p><strong>Following:</strong> {user.following}</p>
          <p><strong>Public Repos:</strong> {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
