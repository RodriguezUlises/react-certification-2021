import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import { lightTheme, darkTheme } from '../../utils/themes';
import { DataProvider } from '../../providers/Context/DataContext';  
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoPage from '../../pages/Video';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import Favorites from '../../pages/Favorites';
import History from '../../pages/History';

function App() {
  const [theme, setTheme] = useState(true); // true is light and false is dark
  const themeToggler = () => setTheme(!theme);
  return (
    <HashRouter>
      <DataProvider>
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
          <AuthProvider>
            <Layout themeToggler={themeToggler}>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route exact path="/video/:id">
                  <VideoPage fav={false} />
                </Route>
                <Route exact path="/favorites">
                  <Favorites />
                </Route>
                <Route exact path='/favorites/:id'>
                  <VideoPage fav={true} />
                </Route>
                <Route exact path='/history'>
                  <History />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </AuthProvider>
        </ThemeProvider>
      </DataProvider>
    </HashRouter>
  );
}

export default App;
