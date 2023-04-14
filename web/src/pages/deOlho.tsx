import React from "react";
import BannerClaro from "../components/bannerClaro";
import TitleBlue from "../components/titleBlue";

function FiqueOlho() {
  return (
    <React.StrictMode>
      <BannerClaro>
        <br />
        <br />
        <TitleBlue>Fique de Olho no Que Acontece no Colégio!</TitleBlue>
        <br />
        <br />

        <div className="container-lg text-center">
          <div className="row">
            <div className="col-4 alignColegio">
              <div className="card cardDeOlho">
                <div className="card-body">
                  <div className="imgDeOlho1"></div>
                  <p className="textDeOlho">Noite de Autógrafos</p>
                  <p className="dateDeOlho">12/12/2022</p>
                </div>
              </div>
            </div>
            <div className="col-4 alignColegio">
              <div className="card cardDeOlho">
                <div className="card-body">
                  <div className="imgDeOlho2"></div>
                  <p className="textDeOlho">NR - Formatura</p>
                  <p className="dateDeOlho">06/12/2022</p>
                </div>
              </div>
            </div>
            <div className="col-4 alignColegio">
              <div className="card cardDeOlho">
                <div className="card-body">
                  <div className="imgDeOlho3"></div>
                  <p className="textDeOlho">Costume Party</p>
                  <p className="dateDeOlho">28/11/2022</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 alignColegio ">
              <div className="card cardDeOlho">
                <div className="card-body">
                  <div className="imgDeOlho4"></div>
                  <p className="textDeOlho">Startup - Visita na Facef</p>
                  <p className="dateDeOlho">23/11/2022</p>
                </div>
              </div>
            </div>
            <div className="col-4 alignColegio">
              <div className="card cardDeOlho">
                <div className="card-body">
                  <div className="imgDeOlho5"></div>
                  <p className="textDeOlho">Jogos Internos</p>
                  <p className="dateDeOlho">22/11/2022</p>
                </div>
              </div>
            </div>
            <div className="col-4 alignColegio">
              <div className="card cardDeOlho">
                <div className="card-body">
                  <div className="imgDeOlho6"></div>
                  <p className="textDeOlho">Cobertura Enem</p>
                  <p className="dateDeOlho">20/11/2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BannerClaro>
    </React.StrictMode>
  );
}

export default FiqueOlho;
