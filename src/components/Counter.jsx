import React from 'react';
import Container from './Container';
import Flex from './Flex';
import Image from './Image';


const Counter = ({imgSrc, number, title}) => {
  return (
    <>
      <Container>
        <Flex>
          <div className="w-[342px] h-[175px] rounded-2xl bg-ofWhite">
            <div className="flex justify-between px-10 py-12 items-center">
              <div>
                <Image imgSrc={imgSrc} className={'h-[80px]'} />
              </div>
              <div>
                <h2 className="font-Nunito font-bold text-5xl">{number}</h2>
                <p className="text-xl font-DM_sans pt-4">{title}</p>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
}

export default Counter
