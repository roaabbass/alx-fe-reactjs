// src/App.jsx
import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import UserCard from './components/UserCard';
import { searchGitHubUser } from './services/githubAPI';

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const userData = await searchGitHubUser(username);
      setUser(userData);
    } catch (error) {
      console.error('User not found', error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <SearchInput onSearch={handleSearch} />
        {user && <UserCard user={user} />}
      </main>
    </div>
  );
}

export default App;
