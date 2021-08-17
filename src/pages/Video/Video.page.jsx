import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import VideoCard from '../../components/VideoCard';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import {
  VideoSection,
  VideoContainer,
  DetailsContainer,
  VideoInfo,
  RelatedVideosContainer,
  ViewsContainer,
  Button,
} from './Video.page.styled';

function VideoPage() {
  const { id } = useParams();
  const theme = useTheme();
  const { getRelatedVideos, getVideoById } = useYoutubeApi();
  const [selectedView, setSelectedView] = useState('Info');
  const [videoData, setVideoData] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);

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
      }
    });
    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <VideoSection>
      <VideoContainer>
        <iframe
          data-testid="iframe"
          src={`https://www.youtube.com/embed/${id}`}
          title={`${videoData?.items[0]?.snippet?.title}`}
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
            Información
          </Button>
          <Button
            onClick={() => setSelectedView('Videos')}
            style={
              selectedView === 'Videos'
                ? { borderBottom: 'none' }
                : { backgroundColor: theme.colors.primary }
            }
          >
            Videos Relacionados
          </Button>
        </ViewsContainer>
        {selectedView === 'Info' ? (
          <VideoInfo>
            <h1>{videoData && videoData.items[0].snippet.title}</h1>
            <p>{videoData && videoData.items[0].snippet.description}</p>
          </VideoInfo>
        ) : (
          <RelatedVideosContainer>
            {relatedVideos &&
              relatedVideos.items.map((video) => (
                <VideoCard key={video.etag} id={video.id.videoId} title={video.snippet.title ? video.snippet.title : 'Sin titulo'} description={video.snippet.description} thumbnails={video.snippet.thumbnails} />
              ))}
          </RelatedVideosContainer>
        )}
      </DetailsContainer>
    </VideoSection>
  );
}

export default VideoPage;
