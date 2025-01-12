import React from 'react'
import Container from '../components/Container';
import Flex from '../components/Flex';
import Image from './Image';
import OurSuccessOne from '../assets/ourSuccessOne.png';
import OurSuccessTwo from '../assets/ourSuccessTwo.png';
import OurSuccessThree from '../assets/ourSuccessThree.png';
import Target from '../assets/target.png';
import Map from '../assets/WorldMap.png';
import Sign from '../assets/sign.png';

const ReasonOfOurSuccess = () => {
  return (
    <>
      <Container>
        <Flex className={'justify-between mb-[150px]'}>
          <div className="flex w-1/2 relative">
            <div className="">
              <Image
                imgSrc={OurSuccessOne}
                className={'w-[366px] h-[291px] rounded-3xl'}
              />
            </div>
            <div className="absolute top-[58%]">
              <Image
                imgSrc={OurSuccessTwo}
                className={'w-[271px] h-[263px] rounded-3xl'}
              />
            </div>
            <div className="absolute top-[15%] left-[38%]">
              <Image
                imgSrc={OurSuccessThree}
                className={'w-[366px] h-[490px] rounded-3xl'}
              />
            </div>
          </div>
          <div className="w-1/2 mt-10">
            <div className="">
              <div className="flex space-x-3 items-center">
                <Image imgSrc={Target} className={'h-[22px]'} />
                <h3 className="text-xl font-DM_sans font-medium">
                  Reason of Our Success
                </h3>
              </div>
              <h3 className="font-Nunito font-bold text-5xl pt-5 leading-[60px]">
                Quality & Experience Best Digital Agency
              </h3>
              <div className="pt-5 space-x-5">
                <button className="px-6 py-3 bg-ofWhite rounded-2xl text-[#6B6161] hover:bg-gradient-to-r hover:from-[#FE651B] hover:to-[#FFAA52] text-lg duration-500">
                  Our Mission
                </button>
                <button className="px-6 py-3 bg-ofWhite rounded-2xl text-[#6B6161] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] text-lg duration-500">
                  Our Vission
                </button>
                <button className="px-6 py-3 bg-ofWhite rounded-2xl text-[#6B6161] hover:bg-gradient-to-r hover:from-[#FE651B] hover:to-[#FFAA52] text-lg duration-500">
                  Our History
                </button>
              </div>
              <p className="w-[584px] font-DM_sans pt-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majori suffered alteration in some form, by injected
                humour, or randomised word whic look even sligh believable. If
                you are going to use.
              </p>
              <div className="pt-10 flex space-x-10">
                <Image imgSrc={Map} className={'h-[118px]'} />
                <div className="space-y-1">
                  <span className="flex space-x-2 items-center">
                    <Image imgSrc={Sign} className={'h-[17px]'} />
                    <h3 className="font-DM_sans">Financial Growth System</h3>
                  </span>
                  <span className="flex space-x-2 items-center">
                    <Image imgSrc={Sign} className={'h-[17px]'} />
                    <h3 className="font-DM_sans">
                      Customer Oriented Program Daily
                    </h3>
                  </span>
                  <span className="flex space-x-2 items-center">
                    <Image imgSrc={Sign} className={'h-[17px]'} />
                    <h3 className="font-DM_sans">Dedicated Team member</h3>
                  </span>
                  <span className="flex space-x-2 items-center">
                    <Image imgSrc={Sign} className={'h-[17px]'} />
                    <h3 className="font-DM_sans">
                      Product ux Design & Development
                    </h3>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
}

export default ReasonOfOurSuccess
