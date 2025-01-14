import React from 'react'
import OurPricing from '../layouts/OurPricing';
import LetSupport from '../components/LetSupport';
import Image from '../components/Image';
import Add from '../assets/Add.png';
import Container from '../components/Container';

const Pricing = () => {
  return (
    <>
      <div className="bg-HeroBanner h-[554px] relative left-0 top-[-150px] -z-30 mb-[-50px]">
        <div className="">
          <h1 className="text-5xl font-bold font-Nunito text-center text-white pt-72">
            Pricing
          </h1>
        </div>
      </div>
      <OurPricing />
      <LetSupport />
      <Container>
        <Image imgSrc={Add} className={'mb-10'}/>
      </Container>
    </>
  );
}

export default Pricing;
