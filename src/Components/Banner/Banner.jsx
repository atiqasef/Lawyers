import React from 'react';
import bannerImage from '../../assets/Image/banner-img-1.png'
const Banner = () => {
    return (
        <div
      className="h-screen bg-cover bg-no-repeat bg-center rounded-3xl"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className=" h-full bg-black/40 ">
        <h1 className="text-white text-5xl font-bold text-center pt-45 pb-4">
          It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally
        </h1>
        <p className='text-base text-white text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
      </div>
    </div>
    );
};

export default Banner;