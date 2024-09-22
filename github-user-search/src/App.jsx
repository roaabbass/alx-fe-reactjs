import React, { useState } from 'react';
import Search from './Search';
import githubService from './githubService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    const result = await githubService.searchGitHubUsers(searchParams);
    setUsers(result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-center text-3xl font-bold text-blue-500 mb-8">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading ? (
        <div className="text-center text-lg mt-8">Loading...</div>
      ) : (
        <div className="user-list mt-8">
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user.id} className="user-card p-4 mb-4 bg-white shadow-md rounded">
                <h3 className="text-xl font-bold">{user.login}</h3>
                <p>Location: {user.location || 'N/A'}</p>
                <p>Repositories: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            ))
          ) : (
            <div className="text-center mt-8 text-gray-500">No users found. Try a different search.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
