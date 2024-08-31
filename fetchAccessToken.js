const axios = require('axios');
require('dotenv').config();

const appId = process.env.PINTEREST_APP_ID;
const appSecret = process.env.PINTEREST_APP_SECRET;
const redirectUri = 'http://localhost:3000/auth/pinterest/callback'; // Update this to your redirect URI

// Step 1: Get authorization code from Pinterest
const authUrl = `https://www.pinterest.com/oauth/?response_type=code&redirect_uri=${redirectUri}&client_id=${appId}&scope=read_public,write_public`;

console.log(`Visit this URL to authorize: ${authUrl}`);

// After visiting the URL and authorizing, you will get a code in the redirect URI
const authorizationCode = 'your_authorization_code'; // Replace with the actual authorization code you receive

// Step 2: Exchange authorization code for access token
axios.post('https://api.pinterest.com/v1/oauth/token/', {
  code: authorizationCode,
  grant_type: 'authorization_code',
  redirect_uri: redirectUri,
  client_id: appId,
  client_secret: appSecret
})
.then(response => {
  console.log('Access Token:', response.data.access_token);
})
.catch(error => {
  console.error('Error fetching access token:', error);
});
