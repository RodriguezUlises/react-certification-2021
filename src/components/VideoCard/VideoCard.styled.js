import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 32vh;
  min-height: 270px;
  max-height: 425px;
  margin-bottom: 5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s ease;
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;
`;

export const VideoTitle = styled.h2`
  font-size: 1rem;
  margin: 5px 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s ease;
`;

export const User = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  height: 38px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 50%;
`;

export const UploadDate = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
  position: relative;
  &::before {
    content: '';
    background-color: ${(props) => props.theme.colors.text};
    position: absolute;
    left: -30px;
    width: 25px;
    height: 25px;
    border-radius: 25px;
  }
  &::after {
    content: '';
    position: absolute;
    left: -20px;
    top: 5px;
    width: 8px;
    height: 10px;
    border-bottom: 2.5px solid ${(props) => props.theme.colors.primary};
    border-left: 2.5px solid ${(props) => props.theme.colors.primary};
  }
`;

export const VideoDescription = styled.p`
  margin: 0px 15px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s ease;
`;

export const ProfilePicture = styled.div`
  position: relative;
  width: 38px;
  min-width: 38px;
  height: 38px;
  border-radius: 50px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.text};
  border: solid 2px ${(props) => props.theme.colors.text};
  overflow: hidden;
  margin-right: 10px;
  transition: all 0.5s ease;
  &::after {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.5s ease;
  }
  &::before {
    position: absolute;
    content: '';
    width: 30px;
    height: 15px;
    border-radius: 50px;
    left: 50%;
    transform: translate(-50%, 175%);
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 0.5s ease;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
