import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Videocard from './Videocard.component';
import YoutubeVideos from '../../mock/youtube-videos-mock.json';
import { lightTheme } from '../../utils/themes';

const video = YoutubeVideos.items[0];

describe('Videocard tests', () => {
  test('should render videocard', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <Videocard id={video.id.videoId} title={video.snippet.title} description={video.snippet.description} thumbnails={video.snippet.thumbnails} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const VideoImage = screen.getByAltText('video');
    const VideoTitle = screen.getByText(video.snippet.title);
    const VideoDesc = screen.getByText(video.snippet.description);
    expect(VideoImage).toBeInTheDocument();
    expect(VideoTitle).toBeInTheDocument();
    expect(VideoDesc).toBeInTheDocument();
  });
});
