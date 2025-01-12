import React from 'react';
import Container from './Container';
import Image from './Image';
import H1 from '../components/H1';

const OurServicesCart = ({imgSrc, text1, text2, btnText}) => {
  return (
    <>
      <Container>
        <div className="bg-ofWhite w-full h-[237px] rounded-2xl mb-20 flex justify-around items-center">
          <div className="">
            <Image
              imgSrc={imgSrc}
              className={'h-[197px] w-[390px] rounded-3xl'}
            />
          </div>
          <div className="">
            <H1 text={text1} />
            <p className="font-DM_sans w-[695px] pt-3">
             {text2}
            </p>
          </div>
          <div className="">
            <button className="px-6 py-3 bg-ofWhite rounded-3xl text-[#6B6161] hover:bg-gradient-to-r hover:from-[#FE651B] hover:to-[#FFAA52] text-lg duration-500 border">
              {btnText}
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurServicesCart;
