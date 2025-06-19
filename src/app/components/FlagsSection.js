'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const FlagsSection = ({ countries }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 769);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // Disabled arrows completely
    centerMode: true,
    centerPadding: '20px'
  };

  return (
    <>
      {/* Desktop Grid */}
      <div className="flag-grid">
        {countries.map((country, i) => (
          <Link key={i} href={country.href} className="flag-card-tile">
            <div className="flag-label-overlay">
              {country.name}
            </div>
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="flag-full-img"
            />
          </Link>
        ))}
      </div>

      {/* Mobile Carousel */}
      {isMobile && (
        <div className="flag-carousel-container">
          <Slider {...sliderSettings}>
            {countries.map((country, i) => (
              <div key={i}>
                <Link href={country.href} className="flag-card-tile">
                  <div className="flag-label-overlay">
                    {country.name}
                  </div>
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="flag-full-img"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default FlagsSection;