import { FEToolkitProvider } from '@fetoolkit/react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Validators } from './constants/validation.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FEToolkitProvider validators={Validators}>
      <App />
    </FEToolkitProvider>
  </StrictMode>,
);
