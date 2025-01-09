import React, { useState } from 'react';
import Image from '../components/Image';
import Nav_Logo from '../assets/navLogo.png';
import { FaAngleDown } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { GiShoppingBag } from 'react-icons/gi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Home',
    'About',
    'Services',
    'Team',
    'Pages',
    'News',
    'Contact',
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Image imgSrc={Nav_Logo} imgAlt="navbar_logo" className="h-16" />
            <div className="leading-6">
              <h3 className="font-bold font-Nunito text-lg sm:text-[22px]">
                ORTENCEY
              </h3>
              <h3 className="font-DM_sans text-sm sm:text-[15px] text-Blue">
                Digital Marketing
              </h3>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-between items-center flex-1 xl:ml-56">
            <ul className="flex gap-5">
              {menuItems.map(item => (
                <li key={item} className="group relative">
                  <button className="flex items-center pt-5 font-Nunito text-black hover:text-HoverC transition-colors">
                    {item}
                    <FaAngleDown className="mt-1 text-MenuC group-hover:text-HoverC ml-1" />
                  </button>
                  <span className="absolute bottom-[-30px] left-0 w-0 h-0.5 bg-HoverC transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex items-center gap-5">
              {/* Search Button */}
              <button className="w-14 h-14 border border-Blue rounded-full relative hover:bg-Blue hover:text-white transition-colors group">
                <IoIosSearch className="text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-Blue group-hover:text-white" />
              </button>

              {/* Cart Button */}
              <div className="relative">
                <button className="w-14 h-14 border border-Blue text-Blue rounded-full flex items-center justify-center hover:bg-Blue hover:text-white transition-colors">
                  <GiShoppingBag className="text-2xl" />
                </button>
                <span className="absolute -top-1 -right-1 bg-Blue text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </div>

              {/* Quote Button */}
              <button className="flex items-center gap-3 border px-8 py-3 rounded-full bg-Blue text-white hover:bg-opacity-90 transition-colors">
                <span className="text-lg font-DM_sans">Free Quote</span>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map(item => (
              <button
                key={item}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-Nunito text-gray-700 hover:text-Blue hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  {item}
                  <FaAngleDown className="text-MenuC" />
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="px-2 py-4 border-t border-gray-200 space-y-4">
            <div className="flex justify-center gap-4">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
