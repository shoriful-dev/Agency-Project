import React from 'react';
import Container from './Container';
import Image from './Image';
import Target from '../assets/target.png';
import H1 from './H1';
import Button from './Button';

const LetSupport = () => {
  return (
    <>
      <div className="bg-SupportBg h-[567px] mb-20">
        <Container>
          <div className="py-20 flex-wrap">
            <span className="flex space-x-3 items-center justify-center">
              <Image imgSrc={Target} className={'h-[22px]'} />
              <h3 className="text-white font-DM_sans">Let’s Support</h3>
            </span>
            <div className="flex justify-center">
              <h3
                className={
                  'w-[628px] text-center font-bold font-Nunito text-[46px] text-white pt-5'
                }
              >
                You need our support to have any projects?
              </h3>
            </div>
            <div className="flex justify-center">
              <p className="font-DM_sans text-xl font-medium w-[827px] text-center pt-10 text-white">
                Enthusiastically architect corporate metrics via enterprise
                methodologies. Progressively extend distinctive process
                improvements rather than parallel channels.
              </p>
            </div>
            <div className="flex space-x-10 justify-center pt-16">
              <Button btnText={'Set Free Quotes'} />
              <button className="text-lg font-DM_sans px-8 py-3 hover:bg-gradient-to-r hover:from-[#FE651B] hover:to-[#FFAA52] rounded-3xl border border-[#FE651B] text-white">
                Contact For Us
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LetSupport;
