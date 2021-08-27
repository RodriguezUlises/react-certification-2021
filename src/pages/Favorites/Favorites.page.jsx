import React, { useContext } from 'react';
import { Section, Grid } from '../Home/Home.page.styled';
import VideoCard from '../../components/VideoCard';
import { DataContext } from '../../providers/Context/DataContext'; 

const Favorites = () => {
    const appContext = useContext(DataContext);
    return (
        <Section>
            <h1>Favorites Videos</h1>
            <Grid>
              {appContext.state.favoritesVideos.length > 0 ?
                appContext.state.favoritesVideos.map((video) => (
                  <VideoCard
                    key={video.items[0].etag}
                    id={video.items[0].id}
                    title={video.items[0].snippet.title}
                    channelTitle={video.items[0].snippet.channelTitle}
                    publishTime={video.items[0].snippet.publishedAt}
                    thumbnails={video.items[0].snippet.thumbnails}
                    fav={true}
                  />
                ))
                :
                (
                    <p>You dont have favorites videos yet.</p>
                )}
            </Grid>
        </Section>
    )
}

export default Favorites
