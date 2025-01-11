import React from 'react'
import Container from '../components/Container';
import Flex from '../components/Flex';
import Headline from '../components/Headline'
import OurBlogCart from '../components/OurBlogCart';
import OurBlogOne from '../assets/ourBlogOne.png';
import OurBlogTwo from '../assets/ourBlogTwo.png';
import OurBlogThree from '../assets/ourBlogThree.png';

const OurBlog = () => {
  return (
    <>
      <Container>
        <div className="mb-10">
          <Headline text={'Our Blog'} Heading={'Latest Blogs & Articles'} />
        </div>
        <Flex>
          <OurBlogCart imgSrc={OurBlogOne} />
          <OurBlogCart imgSrc={OurBlogTwo} />
          <OurBlogCart imgSrc={OurBlogThree} />
        </Flex>
      </Container>
    </>
  );
}

export default OurBlog
