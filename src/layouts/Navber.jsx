import React from 'react';
import Flex from '../components/Flex';
import Image from '../components/Image';
import Logo from '../assets/navLogo.png';
import { Link } from 'react-router';
import { FaAngleDown } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { GiShoppingBag } from 'react-icons/gi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <>
      <div className="bg-white pl-4 max-w-[1680px] ml-auto rounded-l-[50px]">
        <Flex className={'items-center justify-between'}>
          <Flex className={'gap-x-3.5 items-center'}>
            <Image imgSrc={Logo} imgAlt={'Logo'} />
            <div className="">
              <h3 className="text-[22px] font-Nunito font-bold text-black">
                ORTENCEY
              </h3>
              <h3 className="text-[15px] font-DM_sans text-Blue">
                Digital Marketing
              </h3>
            </div>
          </Flex>
          <div className="">
            <ul className="flex space-x-5">
              <li className="font-Nunito relative group flex items-center space-x-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-HoverC flex items-center space-x-1 ${
                      isActive ? 'text-HoverC' : ''
                    }`
                  }
                >
                  <span>Home</span>
                  <FaAngleDown />
                </NavLink>
                <span className="absolute bottom-[-30px] left-0 w-0 h-0.5 bg-HoverC transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="font-Nunito relative group flex items-center space-x-1">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-HoverC flex items-center space-x-1 ${
                      isActive ? 'text-HoverC' : ''
                    }`
                  }
                >
                  <span>About</span>
                  <FaAngleDown />
                </NavLink>
                <span className="absolute bottom-[-30px] left-0 w-0 h-0.5 bg-HoverC transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="font-Nunito relative group flex items-center space-x-1">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `hover:text-HoverC flex items-center space-x-1 ${
                      isActive ? 'text-HoverC' : ''
                    }`
                  }
                >
                  <span>Services</span>
                  <FaAngleDown />
                </NavLink>
                <span className="absolute bottom-[-30px] left-0 w-0 h-0.5 bg-HoverC transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="font-Nunito relative group flex items-center space-x-1">
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    `hover:text-HoverC flex items-center space-x-1 ${
                      isActive ? 'text-HoverC' : ''
                    }`
                  }
                >
                  <span>Team</span>
                  <FaAngleDown />
                </NavLink>
                <span className="absolute bottom-[-30px] left-0 w-0 h-0.5 bg-HoverC transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="font-Nunito relative group flex items-center space-x-1">
                <NavLink
                  to="/pages"
                  className={({ isActive }) =>
                    `hover:text-HoverC flex items-center space-x-1 ${
                      isActive ? 'text-HoverC' : ''
                    }`
                  }
                >
                  <span>Pages</span>
                  <FaAngleDown />
                </NavLink>
                <span className="absolute bottom-[-30px] left-0 w-0 h-0.5 bg-HoverC transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="font-Nunito relative group flex items-center space-x-1">
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    `hover:text-HoverC flex items-center space-x-1 ${
                      isActive ? 'text-HoverC' : ''
                    }`
                  }
                >
                  <span>News</span>
                  <FaAngleDown />
                </NavLink>
                <span className="absolute bottom-[-30px] left-0 w-0 h-0.5 bg-HoverC transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="font-Nunito relative group flex items-center space-x-1">
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `hover:text-HoverC flex items-center space-x-1 ${
                      isActive ? 'text-HoverC' : ''
                    }`
                  }
                >
                  <span>Contact</span>
                  <FaAngleDown />
                </NavLink>
                <span className="absolute bottom-[-30px] left-0 w-0 h-0.5 bg-HoverC transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
          <div className="pr-16">
            <Flex className={'gap-x-6 items-center mr-40'}>
              <div className="px-2 py-4 border-gray-200 space-y-4 flex items-center">
                <div className="flex justify-center gap-4 pt-3 pr-4">
                  <button className="w-12 h-12 border border-Blue rounded-full relative">
                    <IoIosSearch className="text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-Blue" />
                  </button>
                  <div className="relative">
                    <button className="w-12 h-12 border border-Blue rounded-full flex items-center justify-center">
                      <GiShoppingBag className="text-xl text-Blue" />
                    </button>
                    <span className="absolute -top-1 -right-1 bg-Blue text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      3
                    </span>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-3 border px-6 py-3 rounded-full bg-Blue text-white">
                  <span className="text-base font-DM_sans">Free Quote</span>
                  <FaArrowRightLong />
                </button>
              </div>
            </Flex>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default Navbar;

//  <span className="absolute bottom-[-30px] left-0 w-0 h-0.5 bg-HoverC transition-all duration-300 group-hover:w-full"></span>;
