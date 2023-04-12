import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
    children?: React.ReactNode;
}

function TitleWhite({ children }: Props) {
  return (
    <div>
        <p className="text-center text-uppercase fs-2 fw-bold titleColorWhite">
            {children}
        </p>
    </div>
  );
}

export default TitleWhite;
