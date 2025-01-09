import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import Target from '../assets/target.png';
import ParcentageOne from '../assets/pOne.png';
import ParcentageTwo from '../assets/pTwo.png';
import ParcentageThree from '../assets/pThree.png';
import RightImage from '../assets/rightPicture.png';
import Experience from '../assets/Experience.png';

const WhyChooseOrtencey = () => {
  return (
    <>
      <div className="bg-ofWhite">
        <Container>
          <div className={'mb-[100px] py-[100px] justify-between flex flex-wrap'}>
            <div>
              <div className="flex gap-3 items-center">
                <Image imgSrc={Target} className={'h-[22px]'} />
                <h3 className="font-medium text-xl font-DM_sans text-Blue">
                  About Our Company
                </h3>
              </div>
              <h3 className="font-bold text-5xl font-Nunito w-[658px] leading-[60px] pt-5">
                Reason For Choosing Our Digital Agency
              </h3>
              <p className="w-[584px] pt-5 pb-10">
                There are many variations of passages of Lorem Ipsum available,
                but the majori suffered alteration in some form, by injected
                humour, or randomised word whic look even sligh believable. If
                you are going to use.
              </p>
              <div className="flex-row space-y-5">
                <Image imgSrc={ParcentageOne} />
                <Image imgSrc={ParcentageTwo} />
                <Image imgSrc={ParcentageThree} />
              </div>
            </div>

            <div>
              <div className="relative">
                <Image
                  imgSrc={RightImage}
                  className={'w-708px h-[466px] rounded-[50px]'}
                />
                <button>
                  <Image
                    imgSrc={Experience}
                    className={'absolute bottom-14 left-[160px] z-30'}
                  />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default WhyChooseOrtencey;
