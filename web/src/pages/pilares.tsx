import React from "react";
import Banner from "../components/banner";
import TitleWhite from "../components/titleWhite";
import { Container, Row, Col } from "react-bootstrap";

function Pilares() {
  return (
    <React.StrictMode>
      <Banner>
        <p className="text-center text-uppercase fs-4 fw-bold subtitle">
          Nossos Pilares
        </p>
        <TitleWhite>
          Os Valores Que Nos Guiam: Conheça Os Pilares Do Colégio Monteiro
          Lobato
        </TitleWhite>
        <br />
        <br />
        <Container>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            <Col className="col-sm-6 col-md-4 col-lg-4">
              <div className="imgMission"></div>
              <div className="rectanglePillars">
                <div className="titlePillars">Missão</div>
                <div className="textPillars">
                  Oferecer serviço educacional de qualidade por meio da inovação
                  e infraestrutura, movidos pela credibilidade e paixão por
                  revolucionar o ensino a fim de construir um ser humano
                  integrado.
                </div>
              </div>
            </Col>
            <Col className="col-sm-6 col-md-4 col-lg-4">
              <div className="imgValue"></div>
              <div className="rectanglePillars">
                <div className="titlePillars">Visão</div>
                <div className="textPillars">
                  Ser reconhecida pela excelência em qualidade de ensino,
                  inovação e sustentabilidade em Franca e seu entorno.
                </div>
              </div>
            </Col>
            <Col className="col-sm-6 col-md-4 col-lg-4">
              <div className="imgVision"></div>
              <div className="rectanglePillars">
                <div className="titlePillars">Missão</div>
                <div className="textPillars">
                  Oferecer serviço educacional de qualidade por meio da inovação
                  e infraestrutura, movidos pela credibilidade e paixão por
                  revolucionar o ensino a fim de construir um ser humano
                  integrado.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
      </Banner>
    </React.StrictMode>
  );
}

export default Pilares;
