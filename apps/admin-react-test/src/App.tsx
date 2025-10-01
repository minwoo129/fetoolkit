import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import TestPage1 from './pages/TestPage1';
import TestPage2 from './pages/TestPage2';
import TestPage3 from './pages/TestPage3';
import TestPage4 from './pages/TestPage4';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Main />} />
          <Route path="/test-page-1" element={<TestPage1 />} />
          <Route path="/test-page-2" element={<TestPage2 />} />
          <Route path="/test-page-3" element={<TestPage3 />} />
          <Route path="/test-page-4" element={<TestPage4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
