import styled from 'styled-components';

export const VideoSection = styled.div`
  height: calc(100vh - min(9vh, 55px));
  margin-top: min(9vh, 55px);
  display: flex;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: all 0.5s ease;
  margin-left: 5%;
  width: 95%;

  @media (max-width: 760px) {
    flex-direction: column;
    margin-left: 0%;
    width: 100%;
    height: 100%;
  }
`;

export const VideoContainer = styled.div`
  width: 70%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  @media (max-width: 760px) {
    width: 100%;
    height: 40vh;
  }
`;

export const DetailsContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: calc(100% - 45px);
  min-height: 250px;
  padding: 20px 20px;
  padding-right: 35px;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.5s ease;
  h1 {
    margin: 0px;
    font-size: 1.5rem;
    font-weight: 800;
  }
  p {
    font-size: 1rem;
    font-weight: 200;
    text-align: justify;
    height: 75%;
    overflow-y: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const AddFav = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;

export const RelatedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 45px);
  align-items: center;
  margin-top: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0px 20px;
`;

export const ViewsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
`;

export const Button = styled.button`
  width: 50%;
  height: 100%;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  border: solid 1px ${(props) => props.theme.colors.primary};
  transition: all 0.5s ease;
`;
