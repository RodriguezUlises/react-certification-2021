import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { DataContext, ACTIONS } from '../../providers/Context/DataContext';
import VideoCard from '../../components/VideoCard';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import { storage } from '../../utils/storage';
import { useAuth } from '../../providers/Auth';
import {
  VideoSection,
  VideoContainer,
  DetailsContainer,
  VideoInfo,
  RelatedVideosContainer,
  ViewsContainer,
  Button,
  AddFav,
} from './Video.page.styled';

function VideoPage({ fav }) {
  const appContext = useContext(DataContext);
  const { authenticated } = useAuth();
  const { id } = useParams();
  const theme = useTheme();
  const { getRelatedVideos, getVideoById } = useYoutubeApi();
  const [selectedView, setSelectedView] = useState('Info');
  const [videoData, setVideoData] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const [favoriteVideo, setFavoriteVideo] = useState(false);

  const handleAddFav = () => {
    if (favoriteVideo) {
      appContext.dispatch({
        type: ACTIONS.REMOVE_FAVORITE_VIDEO,
        payload: videoData.items[0].id,
      });
      storage.set(
        'FAVORITES',
        storage
          .get('FAVORITES')
          .filter((video) => video.items[0].id !== videoData.items[0].id)
      );
      setFavoriteVideo(false);
    } else {
      appContext.dispatch({
        type: ACTIONS.ADD_FAVORITE_VIDEO,
        payload: videoData,
      });
      const currentVideos = storage.get('FAVORITES');
      if (currentVideos === null) {
        storage.set('FAVORITES', [videoData]);
      } else {
        currentVideos.push(videoData);
        storage.set('FAVORITES', currentVideos);
      }
      setFavoriteVideo(true);
    }
  }

  useEffect(() => {
    let mounted = true;
    getVideoById(id).then((res) => {
      if (mounted) {
        setVideoData(res);
      }
    });
    getRelatedVideos(id).then((res) => {
      if (mounted) {
        setRelatedVideos(res);
        console.log(res);
      }
    });
    return () => {
      mounted = false;
    };
  }, [id]);

  useEffect(() => {
    const exist = appContext.state.favoritesVideos.find((video) => {
      if (video.items[0].id === id) {
        return true;
      }
    });
    if (exist) {
      setFavoriteVideo(true);
    } else {
      setFavoriteVideo(false);
    }
  }, [id]);

  useEffect(() => {
    const exist = appContext.state.videoHistory.find((video) => {
      if (video?.items[0].id === id) {
        return true;
      }
    });
    if (exist === undefined && videoData !== null) {
      const history = storage.get('HISTORY');
      if (history === null) {
        storage.set('HISTORY', [videoData]);
      } else {
        history.push(videoData);
        storage.set('HISTORY', history);
      }
      appContext.dispatch({
        type: ACTIONS.ADD_VIDEO_HISTORY,
        payload: videoData,
      });
    }
  }, [videoData]);

  return (
    <VideoSection>
      <VideoContainer>
        <iframe
          data-testid="iframe"
          src={`https://www.youtube.com/embed/${id}`}
          title="video"
          allowFullScreen
        />
      </VideoContainer>
      <DetailsContainer>
        <ViewsContainer>
          <Button
            onClick={() => setSelectedView('Info')}
            style={
              selectedView === 'Info'
                ? { borderBottom: 'none' }
                : { backgroundColor: theme.colors.primary }
            }
          >
            Information
          </Button>
          <Button
            onClick={() => setSelectedView('Videos')}
            style={
              selectedView === 'Videos'
                ? { borderBottom: 'none' }
                : { backgroundColor: theme.colors.primary }
            }
          >
            {fav ? 'Favorites Videos' : 'Related Videos'}
          </Button>
        </ViewsContainer>
        {selectedView === 'Info' ? (
          <VideoInfo>
            <h1>{videoData && videoData.items[0].snippet.title}</h1>
            {authenticated && (
              <AddFav onClick={handleAddFav}>
                {favoriteVideo ? 'Remove from Favorites Videos' : 'Add to Favorites Videos'}
              </AddFav>
            )}
            <p>{videoData && videoData.items[0].snippet.description}</p>
          </VideoInfo>
        ) : (
          <RelatedVideosContainer>
            {fav
              ? appContext.state.favoritesVideos.map((video) => (
                  <VideoCard
                    key={video.items[0].etag}
                    id={video.items[0].id}
                    title={video.items[0].snippet.title}
                    channelTitle={video.items[0].snippet.channelTitle}
                    publishTime={video.items[0].snippet.publishedAt}
                    thumbnails={video.items[0].snippet.thumbnails}
                    fav
                  />
                ))
              : relatedVideos &&
                relatedVideos.items
                  .filter((video) => video.snippet !== undefined)
                  .map((video) => (
                    <VideoCard
                      key={video.etag}
                      id={video.id.videoId}
                      title={video.snippet.title}
                      channelTitle={video.snippet.channelTitle}
                      publishTime={video.snippet.publishTime}
                      thumbnails={video.snippet.thumbnails}
                    />
                  ))}
          </RelatedVideosContainer>
        )}
      </DetailsContainer>
    </VideoSection>
  );
}

export default VideoPage;
