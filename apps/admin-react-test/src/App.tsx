import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppMenuTemplate from './components/AppMenuTemplate';
import CheckboxTestPage from './pages/CheckboxTestPage';
import DropdownTestPage from './pages/DropdownTestPage';
import InputTestPage from './pages/InputTestPage';
import Main from './pages/Main';
import SwitchTestPage from './pages/SwitchTestPage';
import TableTestPage from './pages/TableTestPage';
import TestPage1 from './pages/TestPage1';
import TestPage2 from './pages/TestPage2';
import TestPage3 from './pages/TestPage3';
import TestPage4 from './pages/TestPage4';
import TextareaTestPage from './pages/TextareaTestPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppMenuTemplate />}>
          <Route path="/" element={<Main />} />
          <Route path="/test-page-1" element={<TestPage1 />} />
          <Route path="/test-page-2" element={<TestPage2 />} />
          <Route path="/test-page-3" element={<TestPage3 />} />
          <Route path="/test-page-4" element={<TestPage4 />} />
          <Route path="/input-test" element={<InputTestPage />} />
          <Route path="/checkbox-test" element={<CheckboxTestPage />} />
          <Route path="/switch-test" element={<SwitchTestPage />} />
          <Route path="/table-test" element={<TableTestPage />} />
          <Route path="/dropdown-test" element={<DropdownTestPage />} />
          <Route path="/textarea-test" element={<TextareaTestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
