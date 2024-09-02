import React from 'react';
import brand1 from '../assets/Images/brands/aprium.png';
import brand2 from '../assets/Images/brands/cavalli.png';
import brand3 from '../assets/Images/brands/avx.png';
import brand4 from '../assets/Images/brands/grand.png';
import brand5 from '../assets/Images/brands/replay.png';
import brand6 from '../assets/Images/brands/karl.png';
import brand7 from '../assets/Images/brands/iceberg.png';
import brand8 from '../assets/Images/brands/cerruti.png';
import brand9 from '../assets/Images/brands/guadi.png';
import brand10 from '../assets/Images/brands/bikkemergs.png';

const BrandMarquee = () => {
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
    brand10,
  ];
  return (
    <div>
      <div className="wrapper">
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

export default BrandMarquee;
