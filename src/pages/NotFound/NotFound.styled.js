import styled from 'styled-components';

export const NotFound = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 95%;
  height: calc(100vh - min(9vh, 55px));
  background-color: ${(props) => props.theme.colors.secondary};
  justify-content: flex-end;
  align-items: center;
  margin-top: min(9vh, 55px);
  transition: all 0.5s ease;
  h1 {
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
    font-size: 80px;
    margin: 0px;
    transition: all 0.5s ease;
  }
  h2 {
    color: ${(props) => props.theme.colors.text};
    font-weight: 400;
    font-size: 30px;
    margin: 0px;
    transition: all 0.5s ease;
  }
  @media (max-width: 760px) {
    margin-left: 0%;
    width: 100%;
  }
`;
