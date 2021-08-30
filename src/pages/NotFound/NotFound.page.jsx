import React from 'react';
import { NotFound } from './NotFound.styled';

function NotFoundPage() {
  return (
    <NotFound>
      <h1>404</h1>
      <h2>Page not found</h2>
      <img src="404.gif" alt="page not found" />
    </NotFound>
  );
}

export default NotFoundPage;
