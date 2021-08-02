import React from 'react';
import Header from '../Header';

function Layout({ children, themeToggler, fetchVideos }) {
  return (
    <>
      <Header themeToggler={themeToggler} fetchVideos={fetchVideos} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
