import React from 'react'
import Container from './Container'
import Headline from './Headline'
import TeammemberCart from './TeammemberCart';
import ProfileOne from '../assets/profileOne.png';
import ProfileTwo from '../assets/profileTwo.png';
import ProfileThree from '../assets/profileThree.png';
import ProfileFour from '../assets/profileFour.png';
import ProfileFive from '../assets/ProfileFive.png';
import ProfileSix from '../assets/ProfileSix.png';
import ProfileSeven from '../assets/ProfileSeven.png';
import ProfileEight from '../assets/ProfileEight.png';
import TeamCartTwo from '../components/TeamCartTwo';
import Flex from './Flex';

const CreativeTeamMember = () => {
  return (
    <>
      <Container>
        <div className="mb-20">
          <Headline text={'Team Member'} Heading={'Creative Team Member'} />
        </div>
        <div className="flex flex-wrap space-y-10 mb-20">
          <Flex className={'justify-between space-x-5'}>
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
          <Flex className={'justify-between space-x-5'}>
            <TeammemberCart
              imgSrc={ProfileFive}
              text={'Karikok Jahan'}
              text2={'Executive Manager'}
            />
            <TeammemberCart
              imgSrc={ProfileSix}
              text={'Dickerson MH'}
              text2={'Agency Analysis'}
            />
            <TeammemberCart
              imgSrc={ProfileSeven}
              text={'Karikok Jahan'}
              text2={'Executive Manager'}
            />
            <TeammemberCart
              imgSrc={ProfileEight}
              text={'Dickerson MH'}
              text2={'Agency Analysis'}
            />
          </Flex>
          <Flex className={'justify-between space-x-5'}>
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
        </div>
      </Container>
    </>
  );
}

export default CreativeTeamMember
