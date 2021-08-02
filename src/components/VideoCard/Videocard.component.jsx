import React from 'react';
import { VideoContainer, VideoThumbnail, VideoTitle, VideoDescription } from './VideoCard.styled';

function Videocard({ video }) {
  const { title, description, thumbnails } = video.snippet;
  return (
    <VideoContainer to={`/video/${video.id.videoId}`}>
      <VideoThumbnail src={thumbnails.medium.url} alt="video" />
      <VideoTitle>{title}</VideoTitle>
      <VideoDescription>{description}</VideoDescription>
    </VideoContainer>
  );
}

export default Videocard;