import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function Banner({ children }: Props) {
  return (
    <>
      <div className="bannerBlue">
        {children}
      </div>
    </>
  );
}

export default Banner;
