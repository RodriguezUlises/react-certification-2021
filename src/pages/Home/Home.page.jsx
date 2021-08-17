import React, { useContext } from 'react';
import { Section, Grid } from './Home.page.styled';
import VideoCard from '../../components/VideoCard';
import { DataContext } from '../../providers/Context/DataContext';

function HomePage() {
  const appContext = useContext(DataContext);
  return (
    <Section>
      <Grid>
        {appContext.state.videos &&
          appContext.state.videos.items.map((video) => <VideoCard key={video.etag} id={video.id.videoId} title={video.snippet.title} description={video.snippet.description} thumbnails={video.snippet.thumbnails} />)}
      </Grid>
    </Section>
  );
}

export default HomePage;
