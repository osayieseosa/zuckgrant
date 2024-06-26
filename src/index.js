import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppProvider';
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider >
    <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
    </BrowserRouter>
    </AppProvider>
    </AuthProvider>
  </React.StrictMode>
);
