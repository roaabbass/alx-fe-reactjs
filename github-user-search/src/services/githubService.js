import axios from 'axios';

export const fetchUserData = async (username, location = '', minRepos = '') => {
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?${query}`);
  
  if (response.data.items.length === 0) {
    throw new Error('User not found');
  }

  // Return an array of users
  const users = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    })
  );

  return users; // Return all user details
};
