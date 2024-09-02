import React from 'react';
import brand1 from '../assets/Images/certificates/accord.png';
import brand2 from '../assets/Images/certificates/bci.png';
import brand3 from '../assets/Images/certificates/better.png';
import brand4 from '../assets/Images/certificates/global.png';
import brand5 from '../assets/Images/certificates/oeko.png';
import brand6 from '../assets/Images/certificates/rsg.png';
import brand7 from '../assets/Images/certificates/sedex.png';
import brand8 from '../assets/Images/certificates/textile.png';
import brand9 from '../assets/Images/certificates/bsci.png';

const CertifcationImages = () => {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
  ];
  return (
    <div>
      <div className="certificate-wrapper">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`item item${index + 1}`}
            style={{
              backgroundImage: `url(${brand})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CertifcationImages;
