import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin: 20px;
  margin-bottom: 0px;
  padding-bottom: 30px;
`;

export const Section = styled.section`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  height: 100%;
  min-height: calc(100vh - min(9vh, 55px));
  width: 95%;
  margin-left: 5%;
  text-align: center;
  margin-top: min(9vh, 55px);
  padding-top: 15px;
  transition: all 0.5s ease;

  @media (max-width: 760px) {
    width: 100%;
    margin-left: 0%;
  }
`;
