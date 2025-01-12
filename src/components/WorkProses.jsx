import React from 'react'
import Container from './Container'
import Headline from './Headline'
import Image from './Image';
import OurProcesOne from '../assets/BusinessPlanning.png';
import Marketresearch from '../assets/Marketresearch.png';
import CompletelySolution from '../assets/CompletelySolution.png';

const WorkProses = () => {
  return (
    <>
        <div className="h-[597px] bg-ofWhite py-24 mb-20">
      <Container>
          <div className="mb-16">
            <Headline text={'Work Prosses'} Heading={'How We Work!'} />
          </div>
          <div className="flex justify-between mb-20">
            <Image imgSrc={OurProcesOne} className={'shadow-2xl rounded-3xl'} />
            <Image imgSrc={Marketresearch} className={'shadow-2xl rounded-3xl'} />
            <Image imgSrc={CompletelySolution} className={'shadow-2xl rounded-3xl'} />
          </div>
      </Container>
        </div>
    </>
  );
}

export default WorkProses
