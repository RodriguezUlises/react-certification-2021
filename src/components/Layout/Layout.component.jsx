import React from 'react';
import Header from '../Header';

function Layout({ children, themeToggler }) {
  return (
    <>
      <Header themeToggler={themeToggler} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
