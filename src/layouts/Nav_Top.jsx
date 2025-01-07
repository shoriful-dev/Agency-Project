import React from 'react';
import Flex from '../components/Flex';
import Image from "../components/Image";
import Call from "../assets/call.png";
import Email from "../assets/email.png";
import USA from "../assets/usa.png";
import { FaAngleDown, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Nav_Top = () => {
  return (
    <>
      <div className="max-w-container bg-Blue rounded-r-full py-3">
        <div className="flex justify-between pl-40 pr-10">
          <Flex className={'gap-5 items-center'}>
            <h3 className="text-sm font-DM_sans text-white">
              Welcome to Ortencey Digital Market Agency
            </h3>
            <h4 className="text-Rectangle">|</h4>
            <div className="flex gap-3 items-center">
              <Image imgSrc={Call} className={'w-4 h-4'} />
              <h3 className="text-white">+88 ( 5548 ) 6548</h3>
            </div>
            <h4 className="text-Rectangle">|</h4>
            <div className="flex gap-3 items-center">
              <Image imgSrc={Email} className={'w-[20px] h-[14px]'} />
              <h3 className="text-white">infoyour@gmail.com</h3>
            </div>
          </Flex>
          <Flex>
            <div className="flex items-center text-white mr-10">
              <Image imgSrc={USA} className={'w-5 h-3 mr-2 mt-1'} />   
                <h3 className='font-DM_sans'>English</h3>
                <FaAngleDown className='align-middle items-center flex mt-1 cursor-pointer'/>
            </div>
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-iconC hover:text-[#FE651B]" />
              <h4 className="text-Rectangle">|</h4>
              <FaLinkedinIn className="text-iconC hover:text-[#FE651B]" />
              <h4 className="text-Rectangle">|</h4>
              <FaTwitter className="text-iconC hover:text-[#FE651B]" />
              <h4 className="text-Rectangle">|</h4>
              <FaYoutube className="text-iconC hover:text-[#FE651B]" />
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Nav_Top;
