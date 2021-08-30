import React from 'react';
import Header from '../Header';
import Tabs from '../Tabs';

function Layout({ children, themeToggler }) {
  return (
    <>
      <Header themeToggler={themeToggler} />
      <Tabs />
      <main>{children}</main>
    </>
  );
}

export default Layout;
