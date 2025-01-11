import React from 'react'
import Container from './Container'
import Image from './Image';
import { CiUser } from 'react-icons/ci';
import { AiOutlineComment } from 'react-icons/ai';
import { IoEyeOutline } from 'react-icons/io5';

const OurBlogCart = ({imgSrc}) => {
  return (
    <>
      <Container>
        <div className="w-[464px] h-[550px] relative mb-20 bg-ofWhite rounded-b-3xl">
          <div className="">
            <Image
              imgSrc={imgSrc}
              className={'w-[464px] h-[387px] rounded-3xl'}
            />
          </div>
          <div className="w-[116px] h-[98px] rounded-2xl bg-Blue absolute bottom-[165px]">
            <h3 className="w-[69px] h-[52px] text-white font-medium font-DM_sans text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              09 Dec 2022
            </h3>
            <h3 className="font-DM_sans py-2 px-6 w-[195px] text-center rounded-xl bg-[#5471da] text-white absolute bottom-0 left-20 border-transparent">
              Digital Agency
            </h3>
          </div>
          <div className="px-10 py-5">
            <div className="flex space-x-5">
              <div className="flex items-center gap-x-1">
                <CiUser className="text-Blue" />
                <h3 className=" font-DM_sans">by Admin</h3>
              </div>
              <div className="flex items-center gap-x-1">
                <AiOutlineComment className="text-Blue" />
                <h3 className=" font-DM_sans">25</h3>
              </div>
              <div className="flex items-center gap-x-1">
                <IoEyeOutline className="text-Blue" />
                <h3 className=" font-DM_sans">120 Views</h3>
              </div>
            </div>
            <h3 className='font-bold font-Nunito text-2xl pt-3'>Successful business partner have a meeting and discussing</h3>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurBlogCart
