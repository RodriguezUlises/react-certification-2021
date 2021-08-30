import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ico = styled(Link)`
  width: 50%;
  height: 30%;
  margin-left: 25%;
  svg {
    min-width: 30px;
    min-height: 30px;
  }

  &:hover {
    svg {
      fill: #bf616a;
    }
  }
  @media (max-width: 760px) {
    width: 70%;
    height: 40%;
    margin-left: 0%;
  }
`;

export const IcoPro = styled(Link)`
  width: 50%;
  height: 30%;
  margin-left: 25%;
  svg {
    min-width: 30px;
    min-height: 30px;
  }

  &:hover {
    svg {
      fill: #bf616a;
    }
  }
  @media (min-width: 760px) {
    display: none;
  }
`;

export const TabsContainer = styled.div`
  width: 5%;
  min-width: 55px;
  height: calc(100vh - min(9vh, 55px));
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  position: fixed;
  transition: background-color 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-evenly;

  svg {
    fill: ${(props) => props.theme.colors.text};
    transition: all 0.5s ease;
  }

  @media (max-width: 760px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0px;
    width: 100%;
    height: 10%;
    z-index: 5;
    transition: all 0 ease;
    div {
      width: 25%;
      margin-right: 10%;
      margin-left: 7.5%;
      max-width: 38px;
    }
  }
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

  @media (min-width: 760px) {
    display: none;
  }
`;

export const LoggedPicture = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.5s ease;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.5s ease;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.text};
    position: relative;
    &::after {
      content: '';
      position: absolute;
      background-color: transparent;
      border: 3px solid ${(props) => props.theme.colors.primary};
      border-radius: 0px;
      border-right: none;
      width: 10px;
      height: 20px;
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
    }
    &::before {
      content: '';
      position: absolute;
      background-color: transparent;
      border: 3px solid ${(props) => props.theme.colors.primary};
      border-radius: 0px;
      border-right: none;
      border-top: none;
      width: 8px;
      height: 8px;
      top: 40%;
      left: 47%;
      transform: rotate(225deg);
    }

    img {
      display: none;
    }
  }

  @media (min-width: 760px) {
    display: none;
  }
`;
