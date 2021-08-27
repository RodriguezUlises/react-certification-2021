import React from 'react';
import {
  VideoContainer,
  VideoThumbnail,
  VideoTitle,
  User,
  Flex,
  UploadDate,
  ProfilePicture
} from './VideoCard.styled';
import { format } from 'date-fns';

function Videocard({ id, title, channelTitle, publishTime, thumbnails, fav }) {
  return (
    <VideoContainer to={fav ? `/favorites/${id}` : `/video/${id}`}>
      <VideoThumbnail src={thumbnails.medium.url} alt="video" />
      <VideoTitle>{title}</VideoTitle>
      <User>
        <Flex>
          <ProfilePicture />
          {channelTitle}
        </Flex>
        <UploadDate>{format(Date.parse(publishTime), 'd MMM y')}</UploadDate>
      </User>
    </VideoContainer>
  );
}

export default Videocard;
