import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function Bandeira({ children }: Props) {
  return (
    <>
        <div className="flag">
            {children}
        </div>
    </>
  );
}

export default Bandeira;
