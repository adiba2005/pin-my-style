const axios = require('axios');

// Function to fetch user's pins using the latest API
const fetchPins = async (accessToken) => {
  try {
    const response = await axios.get('https://api.pinterest.com/v5/pins/', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching pins:', error.response ? error.response.data : error.message);
    throw error;
  }
};

module.exports = { fetchPins };
