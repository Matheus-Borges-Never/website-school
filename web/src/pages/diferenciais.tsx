import React from "react";
import TitleWhite from "../components/titleWhite";
import BannerClaro from "../components/bannerClaro";
import Bandeira from "../components/bandeira";

function Diferenciais() {
  return (
    <React.StrictMode>
      <BannerClaro>
        <br />
        <Bandeira>
          <TitleWhite>
            NOSSOS DIFERENCIAIS PARA O ESTUDANTES ESTAR À FRENTE
          </TitleWhite>
        </Bandeira>
        <br />
        <br />
        <div className="container">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-4">
                    <div className="card diferencialCard">
                      <div className="card-body">
                        <p className="diferencialTitle">Programa Bilíngue</p>
                        <p className="diferencialText">
                          O programa bilíngue promove a aprendizagem por meio da
                          integração entre linguagem e conteúdo, contextualizado
                          com a ampliação da visão de mundo e a universalização
                          de conceitos.
                        </p>
                        <div className="schoolButton buttonAlign">
                          <button type="button" className="schoolButtonText">
                            Saiba Mais
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card diferencialCard">
                      <div className="card-body">
                        <p className="diferencialTitle">
                          Educação Socioemocional
                        </p>
                        <p className="diferencialText">
                          Trata-se de um programa de Educação Socioemocional,
                          que conta com a parceria pedagógica do Instituto
                          Ayrton Senna.
                        </p>
                        <div className="schoolButton buttonAlign">
                          <button type="button" className="schoolButtonText">
                            Saiba Mais
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card diferencialCard">
                      <div className="card-body">
                        <p className="diferencialTitle">
                          Plataforma Gamificada
                        </p>
                        <p className="diferencialText">
                          Por meio da gamificação com inteligência artificial,
                          para os estudantes dos anos iniciais do Ensino
                          Fundamental - 2° e 3° anos
                        </p>
                        <div className="schoolButton buttonAlign">
                          <button type="button" className="schoolButtonText">
                            Saiba Mais
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Anterior</span>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Próximo</span>
            </a>
          </div>
        </div>
        <br />
      </BannerClaro>
    </React.StrictMode>
  );
}

export default Diferenciais;
