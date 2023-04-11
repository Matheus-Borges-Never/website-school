import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/style.scss"

function Values() {
  return (
    <>
        <div className="card-group">
            <div className="card cardValues">
                <svg className="cardIcon">
                    <rect width="100%" height="100%" fill="#379FD5"></rect>
                    <text x="20%" y="50%" fill="#dee2e6" dy=".3em">70 x 70</text>
                </svg>
                <div className="card-body">
                    <h5 className="card-title">Educação Infantil</h5>
                    <hr />
                    <p className="card-text">
                        Nós dedicamos a fornecer um ambiente seguro, carinhoso e estimulante 
                        para que os pequenos possam explorar o mundo ao seu redor.
                    </p>
                </div>
            </div>
            <div className="card cardValues">
                <svg className="cardIcon">
                    <rect width="100%" height="100%" fill="#379FD5"></rect>
                    <text x="20%" y="50%" fill="#dee2e6" dy=".3em">70 x 70</text>
                </svg>
                <div className="card-body">
                    <h5 className="card-title">Ensino Fundamental</h5>
                    <hr />
                    <p className="card-text">
                        Estamos comprometidos em fornecer uma educação de qualidade 
                        que ajude a preparar nossos alunos para os desafios futuros.
                    </p>
                </div>
            </div>
            <div className="card cardValues">
                <svg className="cardIcon">
                    <rect width="100%" height="100%" fill="#379FD5"></rect>
                    <text x="20%" y="50%" fill="#dee2e6" dy=".3em">70 x 70</text>
                </svg>
                <div className="card-body">
                    <h5 className="card-title">Ensino Médio</h5>
                    <hr />
                    <p className="card-text">
                        Com uma ampla gama de aulas eletivas e avançadas que 
                        ajudam nossos alunos a se preparar para a faculdade e para o mundo profissional.
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}

export default Values;
