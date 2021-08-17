import React from 'react';
import {
  VideoContainer,
  VideoThumbnail,
  VideoTitle,
  VideoDescription,
} from './VideoCard.styled';

function Videocard({ id, title, description, thumbnails }) {
  return (
    <VideoContainer to={`/video/${id}`}>
      <VideoThumbnail src={thumbnails.medium.url} alt="video" />
      <VideoTitle>{title}</VideoTitle>
      <VideoDescription>{description}</VideoDescription>
    </VideoContainer>
  );
}

export default Videocard;
