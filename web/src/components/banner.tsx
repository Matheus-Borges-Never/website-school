import React from 'react';
import TitleWhite from './titleWhite';

function Banner() {
  return (
    <div>
      <div className="bannerBlue">
        <p className="text-center text-uppercase fs-4 fw-bold subtitle">
          Nossos Pilares
        </p>
        <TitleWhite>
          Os Valores Que Nos Guiam: Conheça Os Pilares Do Colégio Monteiro Lobato
        </TitleWhite>
        <br /><br />
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a natural 
                    lead-in to additional content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a natural lead-in 
                    to additional content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a natural lead-in 
                    to additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
