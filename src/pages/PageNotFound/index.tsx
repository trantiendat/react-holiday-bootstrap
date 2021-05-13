import React from 'react';

const PageNotFoundComponent: React.FC = () => {
  return <h1>Page Not Found</h1>;
};

export const PageNotFound = React.memo(PageNotFoundComponent);
