import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Navbar from './components/navbar';
import Colegio from './pages/colegio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Navbar />
    <section>
      <Home />      
    </section>
    <br /><br />
    <section>
      <Colegio />      
    </section>
  </React.StrictMode>
);