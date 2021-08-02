import styled from 'styled-components';

export const SearchBar = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  height: 5vh;
  max-height: 30px;
  width: 45%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s ease;
  &:hover {
    filter: brightness(90%);
  }
  svg {
    cursor: pointer;
    height: 90%;
    margin: 0px 10px;
    fill: ${(props) => (props.searchTerm ? props.theme.colors.text : '#888')};
  }
  input {
    border: none;
    background-color: inherit;
    font-size: inherit;
    height: 100%;
    width: 90%;
    color: ${(props) => props.theme.colors.text};
    transition: color 0.5s ease;
    &::placeholder {
      color: #888;
    }
    &:focus,
    &:active {
      outline: none;
    }
  }
`;
