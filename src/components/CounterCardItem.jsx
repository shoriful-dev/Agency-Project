import React from 'react'
import Flex from '../components/Flex';
import Container from '../components/Container';
import Counter from '../components/Counter';
import CounterIconOne from '../assets/counterIconOne.png';
import CounterIconTwo from '../assets/counterIconTwo.png';
import CounterIconThree from '../assets/counterIconThree.png';
import CounterIconfour from '../assets/counterIconFour.png';


const CounterCardItem = () => {
  return (
    <>
      <Container>
        <Flex className={'mb-20'}>
          <Counter
            imgSrc={CounterIconOne}
            number={'1500 +'}
            title={'Project Complete'}
          />
          <Counter
            imgSrc={CounterIconTwo}
            number={'150 +'}
            title={'Happy Clients'}
          />
          <Counter
            imgSrc={CounterIconThree}
            number={'95 +'}
            title={'Professional Team'}
          />
          <Counter
            imgSrc={CounterIconfour}
            number={'120 +'}
            title={'Awards Win'}
          />
        </Flex>
      </Container>
    </>
  );
}

export default CounterCardItem
