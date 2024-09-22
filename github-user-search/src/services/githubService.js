import axios from 'axios';

// Function to fetch user data based on username, location, and minimum repositories
export const fetchUserData = async (username, location = '', minRepos = '') => {
  // Construct the search query
  let query = `q=${username}`; // Basic search by username
  if (location) query += `+location:${location}`; // Add location to the query
  if (minRepos) query += `+repos:>=${minRepos}`; // Add minimum repositories to the query

  // Make the API request to the GitHub Search API
  const response = await axios.get("https://api.github.com/search/users?q");

  // If no users are found, throw an error
  if (response.data.items.length === 0) {
    throw new Error('User not found');
  }

  // Fetch detailed information for each user in the search results
  const users = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    })
  );

  // Return the array of detailed user data
  return users;
};
