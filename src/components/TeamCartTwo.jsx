import React from 'react'
import Container from '../components/Container';
import Image from '../components/Image';
import Flex from '../components/Flex';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const TeamCartTwo = (props) => {
  const { imgSrc, text, text2 } = props;
  return (
    <>
      <Container>
        <div className="">
          <div className="w-[341px] h-[446px] bg-white rounded-2xl shadow-xl">
            <div className="justify-center flex pt-5">
              <Image
                imgSrc={imgSrc}
                className={
                  'w-[301px] h-[319px] bg-cover bg-center bg-no-repeat rounded-2xl'
                }
              />
            </div>
            <Flex className={'space-x-5 pt-10 justify-center'}>
              <span className="w-[33px] h-[33px] rounded-full bg-ofWhite hover:bg-Blue relative group">
                <FaFacebookF className="text-Blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
              </span>
              <span className="w-[33px] h-[33px] rounded-full bg-ofWhite hover:bg-Blue relative group">
                <FaTwitter className="text-Blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
              </span>
              <span className="w-[33px] h-[33px] rounded-full bg-ofWhite hover:bg-Blue relative group">
                <FaLinkedinIn className="text-Blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
              </span>
              <span className="w-[33px] h-[33px] rounded-full bg-ofWhite hover:bg-Blue relative group">
                <FaYoutube className="text-Blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
              </span>
            </Flex>
          </div>
        </div>
      </Container>
    </>
  );
}

export default TeamCartTwo
