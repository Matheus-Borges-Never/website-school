import React from "react";
import BannerClaro from "../components/bannerClaro";

function PorDentro() {
  return (
    <React.StrictMode>
      <BannerClaro>
        <br />
        <br />
        <div className="container-lg text-center">
          <div className="row">
            <div className="col-6 alignNews">
                <svg width="448" height="379" viewBox="0 0 448 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="448" height="379" rx="20" fill="url(#pattern0)"/>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use href="#image0_7_2" transform="matrix(0.0005 0 0 0.000591029 0 -0.091029)"/>
                        </pattern>
                        <image id="image0_7_2" width="2000" height="2000" href="https://img.freepik.com/vetores-gratis/ilustracao-de-pagina-de-destino-de-conceito-de-noticias_52683-18230.jpg?w=1380&t=st=1681384551~exp=1681385151~hmac=40d0c959449339d4afa1631eb3128f894024d459bf9eb638e8fa209ed854cebc"/>
                    </defs>
                </svg>
            </div>
            <div className="col-6 alignNews justify-content-start">
              <div className="schoolAbout">
                Fique Por Dentro Das Nossas Atividades Pedagógicas - LOBATO NEWS
              </div>
              <div className="line"></div>
              <br />
              <div className="schoolText">
                Confira as últimas notícias do Colégio Monteiro Lobato e fique
                por dentro de tudo o que está acontecendo em nossa escola!
              </div>
              <br />
              <div className="schoolButton">
                <button type="button" className="schoolButtonText">
                  Veja Nossas News
                </button>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </BannerClaro>
    </React.StrictMode>
  );
}

export default PorDentro;
