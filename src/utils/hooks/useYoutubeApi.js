import { useState, useContext } from 'react';
import { youtubeClient } from '../../api/youtube.api';
import { DataContext, ACTIONS } from '../../providers/Context/DataContext';

const useYoutubeApi = () => {
  const appContext = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async (query) => {
    setLoading(true);
    try {
      const response = await youtubeClient.get('/search', {
        params: {
          q: query || 'wizeline',
          type: 'video',
          maxResults: 18,
        },
      });
      appContext.dispatch({
        type: ACTIONS.SET_VIDEOS,
        payload: response.data,
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getVideoById = async (videoId) => {
    try {
      const response = await youtubeClient.get('/videos', {
        params: {
          id: videoId,
        },
      });
      return response.data;
    } catch (err) {
      setError(err);
    }
  };

  const getRelatedVideos = async (videoId) => {
    try {
      const response = await youtubeClient.get('/search', {
        params: {
          type: 'video',
          relatedToVideoId: videoId,
          maxResults: 18,
        },
      });
      return response.data;
    } catch (err) {
      setError(err);
    }
  };

  return {
    loading,
    error,
    fetchVideos,
    getVideoById,
    getRelatedVideos,
  };
};

export default useYoutubeApi;
