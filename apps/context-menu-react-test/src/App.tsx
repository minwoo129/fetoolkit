import { withContextMenu } from '@fetoolkit/context-menu-react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import AppContextMenu from './components/AppContextMenu';
import ContextMenuTestPage1 from './pages/ContextMenuTestPage1';
import ContextMenuTestPage2 from './pages/ContextMenuTestPage2';
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
        <Route
          path="/test-page-2"
          element={withContextMenu(
            <ContextMenuTestPage2 />,
            <AppContextMenu />,
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
