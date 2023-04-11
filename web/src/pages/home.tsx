import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Slide from '../components/slide';
import Values from '../components/values';

function Home() {
  return (
    <React.StrictMode>
      <Slide />
      <Values />
    </React.StrictMode>
  );
}

export default Home;
