import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import TitleBlue from "../components/titleBlue";
import TresImagens from "../components/colunaTresImagens";

function Colegio() {
  return (
    <React.StrictMode>
      <TitleBlue>
        TRANSFORMANDO VIDAS PELA EDUCAÇÃO <br />
        DA BASE AO RESULTADO!
      </TitleBlue>
      <br />
      <Container className="text-center">
        <Row>
          <Col xs={12} md={6}>
            <TresImagens />
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-start"
          >
            <div className="schoolAbout">Sobre Nós</div>
            <div className="line"></div>
            <br />
            <div className="schoolText">
              O Colégio Monteiro Lobato está sempre atento às inovações que
              acontecem no mundo da educação, procurando a melhor forma possível
              de adequá-las ao nosso meio
              <br />
              <br />
              Protagonizamos e tecemos, fio a fio, todos os dias há mais de 40
              anos, uma história de educação em Franca que nos enche de orgulho
              e de satisfação.
              <br />
              <br />
              Somos Apaixonados pela educação e engajados na missão de
              contribuir para seres humanos mais dignos e ético!!
            </div>
            <br />
            <div className="schoolButton">
              <button type="button" className="schoolButtonText">
                Veja Mais de Nossa História
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </React.StrictMode>
  );
}

export default Colegio;
