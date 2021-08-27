import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
  font-size: 1.75rem;
  user-select: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  transition: color 0.5s ease;
  span {
    padding: 0px 5px;
    background-color: #bf616a;
    color: white;
    border-radius: 7.5px;
    position: relative;
    &::after {
      content: 'TV';
      color: #888;
      position: absolute;
      font-size: 0.65rem;
      top: 0;
      right: -1rem;
    }
  }

  @media (max-width: 760px) {
    color: transparent;
    background-color: transparent;
    border: 5px solid #bf616a;
    border-radius: 25px;
    height: 45px;
    width: 45px;
    position: relative;
    transition: color 0s ease;
    &::before {
      content: '';
      background-color: transparent;
      height: 15px;
      width: 20px;
      border-bottom: 5px solid #bf616a;
      border-right: 5px solid #bf616a;
      position: absolute;
      top: 10px;
      left: 0px;
      transform: rotate(35deg);
    }
    &::after {
      content: '';
      background-color: transparent;
      height: 15px;
      width: 18px;
      border-bottom: 5px solid #bf616a;
      border-right: 5px solid #bf616a;
      position: absolute;
      top: 12px;
      right: 0px;
      transform: rotate(218deg);
    }

    span {
      display: none;
    }
  }
`;
