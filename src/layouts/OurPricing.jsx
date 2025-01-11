import React from 'react'
import Container from '../components/Container'
import PricingCard from '../components/PricingCard';
import PricingImageOne from '../assets/text.png';
import PricingImageTwo from '../assets/pricingsecondImage.png';
import PricingImageThree from '../assets/pricingThirdImage.png';
import PricingLogo from '../assets/pricingCardLogo.png';
import PricingLogoTwo from '../assets/pricingIconTwo.png';
import PricingLogoThree from '../assets/pricingIconThree.png';

const OurPricing = () => {
  return (
    <>
      <Container className={'flex flex-col md:flex-row justify-center items-center md:ml-[290px] space-y-4 md:space-y-0 md:space-x-4'}>
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
    </>
  );
}

export default OurPricing
