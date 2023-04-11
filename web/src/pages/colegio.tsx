import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Title from '../components/title';
import TresImagens from '../components/colunaTresImagens';

function Colegio() {
  return (
    <React.StrictMode>
        <Title>
            TRANSFORMANDO VIDAS PELA EDUCAÇÃO  <br />
            DA BASE AO RESULTADO!
        </Title>
        <br />
        <div className="container-lg text-center">
            <div className="row align-items-center">
                <div className="col-6">
                    <TresImagens />
                </div>
                <div className="col-6">
                    One of three columns
                </div>
            </div>

        </div>
    </React.StrictMode>
  );
}

export default Colegio;
