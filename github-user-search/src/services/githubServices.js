import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
    // We build the query string dynamically
    let query = '';
    if (username) query += `user:${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data; // Note: Search API returns an object with an 'items' array
};