const axios = require('axios');

const PINTEREST_API_URL = 'https://api.pinterest.com/v1/me/pins/';
const ACCESS_TOKEN = process.env.PINTEREST_ACCESS_TOKEN; // Replace with your access token

// Function to fetch Pinterest data
async function fetchPins() {
  try {
    const response = await axios.get(`${PINTEREST_API_URL}?access_token=${ACCESS_TOKEN}`);
    return response.data.data; // Adjust based on API response format
  } catch (error) {
    console.error('Error fetching Pinterest data:', error);
    throw error;
  }
}

module.exports = {
  fetchPins
};
