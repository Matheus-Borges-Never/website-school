import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Slide() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item" data-bs-interval="10000">
          <svg 
            className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" 
            width="800" height="809" 
            xmlns="http://www.w3.org/2000/svg" 
            role="img" 
            aria-label="Placeholder: First slide" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="45%" y="50%" fill="#555" dy=".3em">Primeiro Slide 800px x 809px</text>
          </svg>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <svg 
            className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" 
            width="800" height="809" 
            xmlns="http://www.w3.org/2000/svg" 
            role="img" 
            aria-label="Placeholder: Second slide" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#666"></rect>
            <text x="45%" y="50%" fill="#444" dy=".3em">Segundo Slide 800px x 809px</text>
          </svg>
        </div>
        <div className="carousel-item active">
          <svg 
            className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" 
            width="800" height="809" 
            xmlns="http://www.w3.org/2000/svg" 
            role="img" 
            aria-label="Placeholder: Third slide" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#555"></rect>
            <text x="45%" y="50%" fill="#333" dy=".3em">Terceiro Slide 800px x 809px</text>
          </svg>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slide;
