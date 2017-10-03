import React from 'react';

const NotFound = ({ staticContext }) => {
  if (staticContext) {
    // eslint-disable-next-line no-param-reassign
    staticContext.status = 404;
  }

  return (
    <div>
      <h1>404: Not Found</h1>
    </div>
  );
};

export default NotFound;
