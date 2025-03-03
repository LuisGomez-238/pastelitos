// Instagram configuration
// Note: We're now using Instagram embeds instead of the API
// This file is kept for backward compatibility but is no longer actively used

export const INSTAGRAM_CONFIG = {
  // These values are no longer used as we've switched to Instagram embeds
  accessToken: import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || '',
  userId: import.meta.env.VITE_INSTAGRAM_USER_ID || '',
  
  // Instagram account username - used for direct links
  username: 'pastelitos_559',
  
  // Instagram profile URL
  profileUrl: 'https://www.instagram.com/pastelitos_559/',
}; 