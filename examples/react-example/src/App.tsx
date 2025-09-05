import { ErrorBoundary } from '@fetoolkit/react/src';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContextMenuTestPage from './pages/ContextMenuTestPage';
import ErrorTestPage from './pages/ErrorTestPage';
import FlatlistTestPage from './pages/FlatlistTestPage';
import InputTestPage from './pages/InputTestPage';
import TestMainPage from './pages/TestMainPage';

function App() {
  return (
    <ErrorBoundary renderFallback={() => <div>Error Test</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestMainPage />} />
          <Route path="/error-test" element={<ErrorTestPage />} />
          <Route path="/flatlist-test" element={<FlatlistTestPage />} />
          <Route path="/input-test" element={<InputTestPage />} />
          <Route path="/context-menu-test" element={<ContextMenuTestPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
