import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]); // Change from user to users (array)
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
    setUsers([]); // Reset users array on new search

    try {
      const userData = await fetchUserData(username, location, minRepos);
      setUsers(userData); // Handle multiple users
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 404) {
        setError("Looks like we cant find the user");
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container max-w-lg mx-auto p-6 bg-white shadow-lg rounded mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block text-gray-700 font-bold mb-2">
            Minimum Repositories
          </label>
          <input
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum repositories count"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-lg mt-4">Loading...</p>}

      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {users.length > 0 && !error && ( // Check if we have multiple users
        <div className="user-list mt-6">
          {users.map((user) => ( // Use map to display multiple users
            <div key={user.id} className="user-details mb-6 bg-gray-100 p-4 rounded shadow">
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-center text-xl font-bold mt-4">{user.name || user.login}</h2>
              <p className="text-center text-gray-600">{user.bio || 'No bio available'}</p>
              <div className="mt-4 space-y-2 text-center">
                <p>
                  <strong>Followers:</strong> {user.followers}
                </p>
                <p>
                  <strong>Following:</strong> {user.following}
                </p>
                <p>
                  <strong>Public Repos:</strong> {user.public_repos}
                </p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
