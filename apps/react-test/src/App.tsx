import { ErrorBoundary } from '@fetoolkit/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundaryTestPage from './pages/ErrorBoundaryTestPage';
import FlatlistTestPage from './pages/FlatlistTestPage';
import MainPage from './pages/MainPage';
import UserAgentTestPage from './pages/UserAgentTestPage';
const App = () => {
  return (
    <ErrorBoundary renderFallback={() => <div>Error Test</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/error-test" element={<ErrorBoundaryTestPage />} />
          <Route path="/flatlist-test" element={<FlatlistTestPage />} />
          <Route path="/user-agent-test" element={<UserAgentTestPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
