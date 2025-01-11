import React from 'react'
import Container from './Container';
import Image from '../components/Image';
import SignText from '../assets/signText.png';
import OverLay from '../assets/pricingOverlay.png';

const PricingCard = ({ btnText, Text, PricingLogo }) => {
  return (
    <>
      <Container>
        <div className="relative group w-[464px] h-[606px]">
          <div className="flex relative mb-52">
            <div className="relative">
              <Image imgSrc={Text} className={''} />
              <Image
                imgSrc={SignText}
                className={'absolute bottom-3 left-16'}
              />
            </div>
            <div className="w-[222px] h-[170px] bg-Blue relative rounded-tr-[50px] mt-[-20px] ml-[-90px] -z-30 group-hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] duration-500">
              <Image
                imgSrc={PricingLogo}
                className={'absolute top-10 right-16'}
              />
            </div>
            <Image
              imgSrc={OverLay}
              className={'absolute top-[-35px] left-[-50px] -z-20'}
            />
          </div>
          <button
            className={
              'px-36 absolute top-[480px] border border-Blue group-hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] text-lg font-DM_sans group-hover:text-white py-3 rounded-full'
            }
          >
            {btnText}
          </button>
        </div>
      </Container>
    </>
  );
};

export default PricingCard
