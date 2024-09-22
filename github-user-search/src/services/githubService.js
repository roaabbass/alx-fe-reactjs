import axios from 'axios';

export const fetchUserData = async (username, location = '', minRepos = '') => {
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?${query}`);
  
  if (response.data.items.length === 0) {
    throw new Error('User not found');
  }

  const userUrl = response.data.items[0].url;
  const userDetails = await axios.get(userUrl); // Fetch user details
  
  return userDetails.data;
};
