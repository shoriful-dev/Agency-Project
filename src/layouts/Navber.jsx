import React from 'react';
import Image from '../components/Image';
import Nav_Logo from '../assets/navLogo.png';
import { FaAngleDown } from 'react-icons/fa';
import Flex from '../components/Flex';
import { IoIosSearch } from 'react-icons/io';
import { GiShoppingBag } from 'react-icons/gi';
import { FaArrowRightLong } from 'react-icons/fa6';

const Navber = () => {
  return (
    <>
      {/* Nav Image Logo Part  */}
      <nav className="max-w-container flex ml-60 py-6 justify-between mr-60 bg-white">
        <div className="flex gap-4">
          <Image imgSrc={Nav_Logo} imgAlt={'navber_logo'} className={'h-16'} />
          <div className="leading-6 pt-3">
            <h3 className="font-bold font-Nunito text-[22px]">ORTENCEY</h3>
            <h3 className="font-DM_sans text-[15px] text-Blue">
              Digital Marketing
            </h3>
          </div>
        </div>
        {/* Nav Menu Item Part */}
        <div className="menu">
          <ul className="flex gap-5">
            <li className="flex items-center pt-5 font-Nunito text-black">
              Home
              <FaAngleDown className="mt-1 text-MenuC" />
              {/* <span className='hover:w-full hover:h-0.5 hover:bg-Blue absolute hover:bottom-[40px] hover:left-0'></span> */}
            </li>
            <li className="flex items-center pt-5 font-Nunito text-black">
              About
              <FaAngleDown className="mt-1 text-MenuC" />
            </li>
            <li className="flex items-center pt-5 font-Nunito text-black">
              Services
              <FaAngleDown className="mt-1 text-MenuC" />
            </li>
            <li className="flex items-center pt-5 font-Nunito text-black">
              Team
              <FaAngleDown className="mt-1 text-MenuC" />
            </li>
            <li className="flex items-center pt-5 font-Nunito text-black">
              Pages
              <FaAngleDown className="mt-1 text-MenuC" />
            </li>
            <li className="flex items-center pt-5 font-Nunito text-black">
              News
              <FaAngleDown className="mt-1 text-MenuC" />
            </li>
            <li className="flex items-center pt-5 font-Nunito text-black">
              Contact
              <FaAngleDown className="mt-1 text-MenuC" />
            </li>
          </ul>
        </div>
        {/* Nav Button Part */}
        <Flex className={'gap-5'}>
          {/* First Button  */}
          <div className="w-14 h-14 border border-Blue rounded-full relative">
            <IoIosSearch className="text-2xl absolute mt-4 left-4 text-Blue" />
          </div>
          {/* Second Button */}
          <div className="relative inline-block">
            <div className="w-14 h-14 text-2xl border-Blue border text-blue-500 rounded-full flex items-center justify-center">
              <GiShoppingBag />
            </div>
            <span className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </div>
          {/* Third Button */}
          <div className="flex items-center gap-3 border px-8 rounded-full bg-Blue">
            <button className='text-lg font-DM_sans text-white'>Free Quote</button>
            <FaArrowRightLong className='text-white'/>
          </div>
        </Flex>
      </nav>
    </>
  );
};

export default Navber;




