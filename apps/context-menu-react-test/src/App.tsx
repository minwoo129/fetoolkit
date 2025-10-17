import { withContextMenu } from '@fetoolkit/context-menu-react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextMenuTestPage1 from './pages/ContextMenuTestPage1';
import Main from './pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/test-page-1"
          element={withContextMenu(<ContextMenuTestPage1 />)}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
