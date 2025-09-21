import React, { useState } from 'react';

const ErrorBoundaryTestPage = () => {
  const [error, setError] = useState(false);

  const handleClick = () => {
    setError(true);
  };

  if (error) {
    throw new Error('test error');
  }
  return (
    <div>
      <h1>TestPage</h1>
      <button onClick={handleClick}>throw error</button>
    </div>
  );
};

export default ErrorBoundaryTestPage;
