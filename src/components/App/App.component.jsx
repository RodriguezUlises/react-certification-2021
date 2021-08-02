import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../utils/themes';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoPage from '../../pages/Video';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';

function App() {
  const [theme, setTheme] = useState(true); // true is light and false is dark
  const themeToggler = () => setTheme(!theme);
  const { data, fetchVideos } = useYoutubeApi();
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
          <Layout themeToggler={themeToggler} fetchVideos={fetchVideos}>
            <Switch>
              <Route exact path="/">
                <HomePage videos={data} />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/video/:id">
                <VideoPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
