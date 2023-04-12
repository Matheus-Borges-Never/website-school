import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
    children?: React.ReactNode;
}

function TitleBlue({ children }: Props) {
  return (
    <div>
        <p className="text-center text-uppercase fs-1 fw-bold titleColorBlue">
          {children}
        </p>
    </div>
  );
}

export default TitleBlue;
