import Image from 'next/image';
// import { Image } from 'antd';
import React from 'react';

const Banner = () => {
  return (
    <div className="w-full h-48 flex items-center justify-center  bg-slate-600 ">
      <Image
        alt="banner"
        src={'/images/img1.jpg'}
        className="w-full object-cover h-full"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Banner;
