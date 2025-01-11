import React from 'react';
import Image from '../components/Image';
import Target from '../assets/target.png';

const Headline = ({ text, Heading }) => {
  return (
    <>
      <div className="flex space-x-3 justify-center">
        <Image imgSrc={Target} className={'h-[22px] mt-1'} />
        <h3 className="text-xl font-medium text-Blue font-DM_sans">{text}</h3>
      </div>
      <div className="pt-2 text-center">
        <h3 className="text-[46px] font-bold font-Nunito">{Heading}</h3>
      </div>
    </>
  );
};

export default Headline;
