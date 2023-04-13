import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function BannerClaro({ children }: Props) {
  return (
    <>
      <div className="bannerClaro">
        {children}
      </div>
    </>
  );
}

export default BannerClaro;
