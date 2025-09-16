import { ErrorBoundary } from '@fetoolkit/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundaryTestPage from './pages/ErrorBoundaryTestPage';
import MainPage from './pages/MainPage';
const App = () => {
  return (
    <ErrorBoundary renderFallback={() => <div>Error Test</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/error-test" element={<ErrorBoundaryTestPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
