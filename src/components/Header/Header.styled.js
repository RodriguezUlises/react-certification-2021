import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  position: fixed;
  top: 0;
  height: 12vh;
  max-height: 60px;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s ease;
  z-index: 5;

  @media (max-width: 760px) {
    justify-content: space-evenly;
  }
`;

export const ProfilePicture = styled(Link)`
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

  &:hover {
    &::after {
      background-color: transparent;
      border: 3px solid ${(props) => props.theme.colors.primary};
      border-radius: 0px;
      border-right: none;
      width: 10px;
      height: 20px;
      left: 45%;
    }
    &::before {
      background-color: transparent;
      border: 3px solid ${(props) => props.theme.colors.primary};
      border-radius: 0px;
      border-right: none;
      border-top: none;
      width: 10px;
      height: 10px;
      top: 35%;
      left: 55%;
      transform: rotate(45deg);
    }
  }
  @media (max-width: 760px) {
    display: none;
  }
`;

export const Toggle = styled.button`
  position: relative;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  transition: all 0.5s ease;
  svg {
    position: absolute;
    fill: ${(props) => props.theme.colors.text};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    transition: all 0.5s ease;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  width: 12%;
  justify-content: space-evenly;
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

  @media (max-width: 760px) {
    display: none;
  }
`;
