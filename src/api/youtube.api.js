import axios from 'axios';

export const youtubeClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: process.env.REACT_APP_YOUTUBE_KEY,
  },
});
