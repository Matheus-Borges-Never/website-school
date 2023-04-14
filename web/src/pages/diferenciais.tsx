import React from "react";
import TitleWhite from "../components/titleWhite";
import BannerClaro from "../components/bannerClaro";
import Bandeira from "../components/bandeira";
import { Container, Row, Col, Button } from "react-bootstrap";

function Diferenciais() {
  return (
    <React.StrictMode>
      <BannerClaro>
        <br />
        <Bandeira>
          <Container fluid>
            <Row>
              <Col sm={12} md={12}>
                <TitleWhite>
                  NOSSOS DIFERENCIAIS PARA O ESTUDANTES ESTAR À FRENTE
                </TitleWhite>
              </Col>
            </Row>
          </Container>
        </Bandeira>
        <br />
        <br />
        <Container fluid>
          <Row>
            <Col sm={12} md={4}>
              <div className="card diferencialCard">
                <div className="card-body">
                  <p className="diferencialTitle">Programa Bilíngue</p>
                  <p className="diferencialText">
                    O programa bilíngue promove a aprendizagem por meio da
                    integração entre linguagem e conteúdo, contextualizado com a
                    ampliação da visão de mundo e a universalização de
                    conceitos.
                  </p>
                  <div className="schoolButton buttonAlign">
                    <Button type="button" className="schoolButtonText">
                      Saiba Mais
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="card diferencialCard">
                <div className="card-body">
                  <p className="diferencialTitle">Educação Socioemocional</p>
                  <p className="diferencialText">
                    Trata-se de um programa de Educação Socioemocional, que
                    conta com a parceria pedagógica do Instituto Ayrton Senna.
                  </p>
                  <div className="schoolButton buttonAlign">
                    <Button type="button" className="schoolButtonText">
                      Saiba Mais
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="card diferencialCard">
                <div className="card-body">
                  <p className="diferencialTitle">Plataforma Gamificada</p>
                  <p className="diferencialText">
                    Por meio da gamificação com inteligência artificial, para os
                    estudantes dos anos iniciais do Ensino Fundamental - 2° e 3°
                    anos
                  </p>
                  <div className="schoolButton buttonAlign">
                    <Button type="button" className="schoolButtonText">
                      Saiba Mais
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
      </BannerClaro>
    </React.StrictMode>
  );
}

export default Diferenciais;
