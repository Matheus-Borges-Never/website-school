import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TitleBlue from '../components/titleBlue';
import TresImagens from '../components/colunaTresImagens';

function Colegio() {
  return (
    <React.StrictMode>
        <TitleBlue>
            TRANSFORMANDO VIDAS PELA EDUCAÇÃO  <br />
            DA BASE AO RESULTADO!
        </TitleBlue>
        <br />
        <div className="container-lg text-center">
            <div className="row col-12">
                <div className="col-6">
                    <TresImagens />
                </div>
                <div className="col-6 justify-content-start">
                    <div className="schoolAbout">Sobre Nós</div>
                    <div className="line"></div>
                    <br />
                    <div className="schoolText">
                        O Colégio Monteiro Lobato está sempre atento às inovações 
                        que acontecem no mundo da educação, procurando a melhor 
                        forma possível de adequá-las ao nosso meio 
                        <br /><br />

                        Protagonizamos e tecemos, fio a fio, todos os dias há mais de 40 anos, 
                        uma história de educação em Franca que nos enche de orgulho e de satisfação. 
                        <br /><br />

                        Somos Apaixonados pela educação e engajados na missão de contribuir 
                        para seres humanos mais dignos e ético!!
                    </div>
                    <br />
                    <div className="schoolButton">
                        <button type='button' className='schoolButtonText'>
                            Veja Mais de Nossa História
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </React.StrictMode>
  );
}

export default Colegio;
