import React, { useContext } from 'react';
import { Section, Grid } from '../Home/Home.page.styled';
import VideoCard from '../../components/VideoCard';
import { DataContext } from '../../providers/Context/DataContext'; 

const History = () => {
    const appContext = useContext(DataContext);
    return (
        <Section>
            <h1>Video History</h1>
            <Grid>
              {appContext.state.videoHistory.length > 0 ?
                appContext.state.videoHistory.map((video) => (
                  <VideoCard
                    key={video.items[0].etag}
                    id={video.items[0].id}
                    title={video.items[0].snippet.title}
                    channelTitle={video.items[0].snippet.channelTitle}
                    publishTime={video.items[0].snippet.publishedAt}
                    thumbnails={video.items[0].snippet.thumbnails}
                  />
                ))
                :
                (
                    <p>You havent see any video yet.</p>
                )}
            </Grid>
        </Section>
    )
}

export default History
