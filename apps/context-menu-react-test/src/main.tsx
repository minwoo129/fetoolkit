import { ContextMenuProvider } from '@fetoolkit/context-menu-react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { MenuButtons } from './constants/contextMenus.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextMenuProvider buttonDatas={MenuButtons}>
      <App />
    </ContextMenuProvider>
  </StrictMode>,
);
