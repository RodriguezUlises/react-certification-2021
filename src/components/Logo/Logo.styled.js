import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
  font-size: 1.75rem;
  user-select: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s ease;
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
`;
