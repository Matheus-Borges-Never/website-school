import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Navbar from './components/navbar';
import Colegio from './pages/colegio';
import Pilares from './pages/pilares';
import Diferenciais from './pages/diferenciais';

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
    <br /><br />
    <section>
      <Colegio />      
    </section>
    <br /><br />
    <br /><br />
    <section>
      <Pilares />      
    </section>
    <br /><br />
    <br /><br />
    <section>
      <Diferenciais />      
    </section>
    <br /><br />
    <br /><br />
  </React.StrictMode>
);