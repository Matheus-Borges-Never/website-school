import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Navbar from './components/navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);