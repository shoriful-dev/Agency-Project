import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import CopyRight from '../assets/Copyright.png';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import Image from '../components/Image';
import Ellips from '../assets/Ellipse.png';
import { LuCalendarClock } from 'react-icons/lu';
import FImage from '../assets/fImageOne.png';
import FImageTwo from '../assets/fImageTwo.png';
import { IoCall, IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { FaArrowUpLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <>
      <div className="bg-footerBg ">
        <div className="bg-black opacity-80">
          <Container className={'relative'}>
            <div className="main">
              <Flex className={'justify-between py-[50px]'}>
                <div className="">
                  <h3 className="font-DM_sans text-white">
                    For Digital Marketing Agency
                  </h3>
                  <h3 className="font-Nunito text-white text-2xl pt-3">
                    Join Our Agency Community
                  </h3>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="text-[#B1B1B1] w-[535px] h-20 rounded-full px-8 relative"
                  />
                  {/* <BlueButton btnText={'Subscribe Now'} className={'absolute top-5 left-10'}/> */}
                  <button className="px-8 py-4 rounded-full bg-Blue absolute right-3 top-2 text-white font-Nunito text-lg">
                    Subscribe Now
                  </button>
                </div>
              </Flex>
              <span>
                <hr className="text-[#393939]" />
              </span>
              <div className="py-[80px] flex justify-between w-[100%]">
                <div className="w-[25%]">
                  <h3 className="text-white font-Nunito font-bold text-2xl relative">
                    About Company
                  </h3>
                  <span className="w-20 absolute h-0.5 mt-2 bg-gradient-to-r from-[#FE651B] to-[#FFAA52]"></span>
                  <p className="w-[339px] text-white pt-8 font-DM_sans">
                    There are many variations of passages of Lore Ipsum availab
                    but the majority have suffereds alteration in some form, by
                    injected humour a randomised words which
                  </p>
                  <Flex className={'space-x-5 pt-5'}>
                    <span className="w-[33px] h-[33px] rounded-full bg-white relative">
                      <FaFacebookF className="text-Blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </span>
                    <span className="w-[33px] h-[33px] rounded-full bg-white relative">
                      <FaTwitter className="text-Blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </span>
                    <span className="w-[33px] h-[33px] rounded-full bg-white relative">
                      <FaLinkedinIn className="text-Blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </span>
                    <span className="w-[33px] h-[33px] rounded-full bg-white relative">
                      <FaYoutube className="text-Blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </span>
                  </Flex>
                </div>

                <div className="w-[25%]">
                  <h3 className="text-white font-Nunito font-bold text-2xl relative">
                    Featured Services
                  </h3>
                  <span className="w-20 absolute h-0.5 mt-2 bg-gradient-to-r from-[#FE651B] to-[#FFAA52]"></span>
                  <Flex className={'flex-col space-y-2 pt-8'}>
                    <div className="flex items-center space-x-2">
                      <Image
                        imgSrc={Ellips}
                        className={'w -[7px] h-[7px] mt-1'}
                      />
                      <li className="text-white hover:text-Blue font-DM_sans">
                        spapaSocial Media Marketing
                      </li>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        imgSrc={Ellips}
                        className={'w -[7px] h-[7px] mt-1'}
                      />
                      <li className="text-Blue font-DM_sans">
                        Pay Per Click Management
                      </li>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        imgSrc={Ellips}
                        className={'w -[7px] h-[7px] mt-1'}
                      />
                      <li className="text-white hover:text-Blue font-DM_sans">
                        Search Engine Optimization
                      </li>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        imgSrc={Ellips}
                        className={'w -[7px] h-[7px] mt-1'}
                      />
                      <li className="text-white hover:text-Blue font-DM_sans">
                        Free SEO Analysis
                      </li>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        imgSrc={Ellips}
                        className={'w -[7px] h-[7px] mt-1'}
                      />
                      <li className="text-white hover:text-Blue font-DM_sans">
                        Case Studies
                      </li>
                    </div>
                  </Flex>
                </div>

                <div className="w-[25%] ">
                  <h3 className="text-white font-Nunito font-bold text-2xl relative">
                    Recent Post
                  </h3>
                  <span className="w-20 absolute h-0.5 mt-2 bg-gradient-to-r from-[#FE651B] to-[#FFAA52]"></span>
                  <Flex className={'pt-8 space-x-5 items-center'}>
                    <Image imgSrc={FImage} className={'h-[70px] w-[70px]'} />
                    <div className="">
                      <h3 className="w-[160px] font-DM_sans text-white">
                        Thoughtful man using laptop pondering
                      </h3>
                      <div className="flex space-x-2 pt-2">
                        <LuCalendarClock className="text-Blue" />
                        <h2 className="font-Nunito text-sm text-white">
                          09 Dec 2022
                        </h2>
                      </div>
                    </div>
                  </Flex>
                  <Flex className={'pt-8 space-x-5 items-center'}>
                    <Image imgSrc={FImageTwo} className={'h-[70px] w-[70px]'} />
                    <div className="">
                      <h3 className="w-[160px] font-DM_sans text-white">
                        Young man with a lap top in a business
                      </h3>
                      <div className="flex space-x-2 pt-2">
                        <LuCalendarClock className="text-Blue" />
                        <h2 className="font-Nunito text-sm text-white">
                          09 Dec 2022
                        </h2>
                      </div>
                    </div>
                  </Flex>
                </div>

                <div className="w-[25%]">
                  <h3 className="text-white font-Nunito font-bold text-2xl relative">
                    Contact Us
                  </h3>
                  <span className="w-20 absolute h-0.5 mt-2 bg-gradient-to-r from-[#FE651B] to-[#FFAA52]"></span>
                  <div className="pt-8">
                    <div className="flex space-x-3 items-center">
                      <IoCall className="text-Blue" />
                      <h2 className="text-white font-DM_sans">
                        +(323) 750-1234
                      </h2>
                    </div>
                    <div className="flex space-x-3 pt-3 items-center">
                      <AiOutlineMail className="text-Blue" />
                      <h2 className="text-white font-DM_sans">
                        infoyourortencey@gmail.com
                      </h2>
                    </div>
                    <div className="flex space-x-3 pt-3 items-center">
                      <IoLocationOutline className="text-Blue text-[20px]" />
                      <h2 className="text-white font-DM_sans w-[291px]">
                        374 FA Tower, William S Blvd, Melbourne 2721, IL, USA
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={'#home'}>
                <span className="px-6 py-6 rounded-full absolute bg-Blue bottom-16 hover:scale-110 right-[-150px]">
                  <FaArrowUpLong className="text-white text-xl" />
                </span>
              </Link>
            </div>
          </Container>
      <div className="">
        <Image imgSrc={CopyRight}/>
      </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
