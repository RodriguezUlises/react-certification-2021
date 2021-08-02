import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 55vh;
  min-height: 300px;
  max-height: 425px;
  margin-bottom: 25px;
  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.primary};
  overflow: hidden;
  transition: all 0.5s ease;
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
`;

export const VideoTitle = styled.h2`
  font-size: 1.2rem;
  margin: 10px 10px;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s ease;
`;

export const VideoDescription = styled.p`
  margin: 0px 15px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s ease;
`;
