import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  position: fixed;
  top: 0;
  height: 9vh;
  max-height: 55px;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s ease;
`;

export const ProfilePicture = styled.div`
  position: relative;
  width: 38px;
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
  width: 10vw;
  justify-content: space-evenly;
`;
