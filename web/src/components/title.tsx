import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
    children?: React.ReactNode;
}

function Title({ children }: Props) {
  return (
    <div>
        <p className="text-center text-uppercase fs-1 fw-bold titleColor">
            {children}
        </p>
    </div>
  );
}

export default Title;
