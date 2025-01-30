import React from 'react';
import Image from '../components/Image';
import ClipImage from '../assets/clipImage.png';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Target from '../assets/target.png';
import Sign from '../assets/sign.png';
import Button from '../components/Button';

const AboutOurCompany = () => {
  return (
    <>
      <Container>
        <Flex className={'flex flex-col lg:flex-row justify-between'}>
          <div className="mb-8 lg:mb-0">
            <Image imgSrc={ClipImage} />
          </div>
          <div className="">
            <div className="flex gap-3 items-center justify-center md:justify-start">
              <Image imgSrc={Target} className={'h-[22px]'} />
              <h3 className="font-medium text-xl font-DM_sans text-Blue">
                About Our Company
              </h3>
            </div>
            <h3 className="font-bold text-3xl lg:text-5xl font-Nunito lg:w-[755px] leading-[40px] lg:leading-[60px] pt-5 text-center md:text-start">
              Best Digital Marketing Agency For People
            </h3>
            <p className="lg:w-[658px] text-gray font-DM_sans pt-5 lg:pt-10 text-center md:text-start px-5 md:px-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have as suffered alteration in some form, by
              injected humour, or randomised words which don t a look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn t anything.
            </p>
            <div className="pt-5 space-y-2 pb-10 px-5 md:px-0">
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-32">
                <div className="flex gap-3 items-center">
                  <Image imgSrc={Sign} className={'h-[17px]'} />
                  <h3 className="font-DM_sans">Digital Strategy</h3>
                </div>
                <div className="flex gap-3 items-center">
                  <Image imgSrc={Sign} className={'h-[17px]'} />
                  <h3 className="font-DM_sans">SEO Optimization</h3>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-[168px]">
                <div className="flex gap-3 items-center">
                  <Image imgSrc={Sign} className={'h-[17px]'} />
                  <h3 className="font-DM_sans">Marketing</h3>
                </div>
                <div className="flex gap-3 items-center">
                  <Image imgSrc={Sign} className={'h-[17px]'} />
                  <h3 className="font-DM_sans">First Working Process</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Button btnText={'Read More'} className={'mb-20'} />
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default AboutOurCompany;
