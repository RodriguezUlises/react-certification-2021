import React from 'react';
import { Section, Grid } from './Home.page.styled';
// import YoutubeMock from '../../mock/youtube-videos-mock.json';
import VideoCard from '../../components/VideoCard';

function HomePage({ videos }) {
  return (
    <Section>
      <Grid>
        {videos &&
          videos.items.map((video) => <VideoCard key={video.etag} video={video} />)}
      </Grid>
    </Section>
  );
}

export default HomePage;
