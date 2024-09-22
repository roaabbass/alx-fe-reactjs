import axios from 'axios';

export const fetchUserData = async (username, location = '', minRepos = '') => {
  // Construct the query string for advanced search
  let query = `q=${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  // Use GitHub Search API to search users with the specified query
  const response = await axios.get(`https://api.github.com/search/users?${query}`);

  if (response.data.items.length === 0) {
    throw new Error('User not found');
  }

  // Fetch additional user details from the user URL
  const users = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    })
  );

  return users; // Return an array of users with detailed information
};
