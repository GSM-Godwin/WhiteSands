import React from 'react';

const Hero = ({ backgroundImage, headingText }) => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-5xl text-white font-bold">{headingText}</h1>
      <div className='absolute border-red-500 border-[3px] w-36 mt-[4rem] ml-[-120px]'/>
    </div>
  );
};

export default Hero;