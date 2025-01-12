import React from 'react';
import Container from './Container';
import Headline from './Headline';
import OurServicesCart from './OurServicesCart';
import OurServicesOne from '../assets/ourServicesOne.png';
import OurServicesTwo from '../assets/ourServicesTwo.png';
import OurServicesThree from '../assets/ourServicesThree.png';
import OurServicesFour from '../assets/ourServicesFour.png';

const OurServices = () => {
  return (
    <>
      <Container>
        <div className="mb-10">
          <Headline text={'Our Services'} Heading={'Best Quality Services'} />
        </div>
        <div className="flex-wrap space-y-[-40px]">
          <OurServicesCart
            imgSrc={OurServicesOne}
            text1={'Search Engine Optimization'}
            text2={`There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.`}
            btnText={'Read More'}
          />
          <OurServicesCart
            imgSrc={OurServicesTwo}
            text1={'Web Design & Development'}
            text2={`There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.`}
            btnText={'Read More'}
          />
          <OurServicesCart
            imgSrc={OurServicesThree}
            text1={'Email and Content Marketing'}
            text2={`There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.`}
            btnText={'Read More'}
          />
          <OurServicesCart
            imgSrc={OurServicesFour}
            text1={'Social Media Network Marketing '}
            text2={`There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage.`}
            btnText={'Read More'}
          />
        </div>
      </Container>
    </>
  );
};

export default OurServices;
