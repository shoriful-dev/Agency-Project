import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image';
import PricingCard from '../components/PricingCard';
import PricingImageOne from '../assets/text.png';
import PricingImageTwo from '../assets/pricingsecondImage.png';
import PricingImageThree from '../assets/pricingThirdImage.png';
import PricingLogo from '../assets/pricingCardLogo.png';
import PricingLogoTwo from '../assets/pricingIconTwo.png';
import PricingLogoThree from '../assets/pricingIconThree.png';
import Target from '../assets/target.png';

const OurPricing = () => {
  return (
    <>
      <div className="">
        <div className="flex space-x-3 justify-center items-center">
          <Image imgSrc={Target} className={'h-[22px]'} />
          <h3 className="text-Blue font-DM_sans text-xl">Our Pricing</h3>
        </div>
        <h3 className="font-bold font-Nunito pt-[20px] mb-20 text-5xl text-center">
          Our Best Pricing Plan
        </h3>
        <Container
          className={
            'flex flex-col md:flex-row justify-center items-center md:ml-[290px] space-y-4 md:space-y-0 md:space-x-4'
          }
        >
          <PricingCard
            btnText="Choose Plan"
            Text={PricingImageOne}
            PricingLogo={PricingLogo}
          />
          <PricingCard
            btnText="Choose Plan"
            Text={PricingImageTwo}
            PricingLogo={PricingLogoTwo}
          />
          <PricingCard
            btnText="Choose Plan"
            Text={PricingImageThree}
            PricingLogo={PricingLogoThree}
          />
        </Container>
      </div>
    </>
  );
}

export default OurPricing
