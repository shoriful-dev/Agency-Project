import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Headline from '../components/Headline';
import ProfileOne from '../assets/profileOne.png';
import ProfileTwo from '../assets/ProfileTwo.png';
import ProfileThree from '../assets/ProfileThree.png';
import ProfileFour from '../assets/ProfileFour.png';
import TeammemberCart from '../components/TeammemberCart';
import TeamCartTwo from '../components/TeamCartTwo';

const TeamMember = () => {
  return (
    <>
      <div className="bg-ofWhite py-24 mb-20">
        <Container>
          <div className="">
            <Headline text={'Team Member'} Heading={'Creative Team Member'} />
          </div>
          <Flex className={'pt-10'}>
            <TeammemberCart
              imgSrc={ProfileOne}
              text={'Robert Sions'}
              text2={'Business Consultant'}
            />
            <TeamCartTwo imgSrc={ProfileTwo} />
            <TeammemberCart
              imgSrc={ProfileThree}
              text={'Karikok Jahan'}
              text2={'Executive Manager'}
            />
            <TeammemberCart
              imgSrc={ProfileFour}
              text={'Dickerson MH'}
              text2={'Agency Analysis'}
            />
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default TeamMember
