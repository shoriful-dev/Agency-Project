import React from 'react'
import Container from '../components/Container';
import Button from '../components/Button';
import Image from '../components/Image';
import Victor from '../assets/Vector.png';
import Shape from '../assets/Shape.png';
import BannerProfile from '../assets/banner_Profile.png';

const Banner = () => {
  return (
    <>
      <div className="bg-bannerPic w-full h-[950px] fixed top-0 left-0 -z-20">
        <div className="fixed inset-0 bg-black bg-opacity-20">
          <Container className={'py-[300px] flex justify-between'}>
            <div>
              <h3 className="bg-gradient-to-r from-[#FE651B] to-[#FFAA52] inline-block bg-clip-text text-transparent font-DM_sans font-medium text-2xl">
                Your Trusted Ortencey Agency
              </h3>
              <Image
                className={
                  'absolute h-[600px] bottom-[130px] left-[180px] -z-30'
                }
                imgSrc={Shape}
              />
              <h3 className="font-Nunito font-bold text-6xl w-[695px] text-white leading-[80px] pt-5">
                Our Digital Agency With Excellence Services
              </h3>
              <h3 className="font-medium font-DM_sans text-xl text-white w-[594px] pt-8 pb-16">
                The 3 golden rules professional Digital Marketing Agency don’t
                want you to know about.
              </h3>
              <Button btnText={'Discover More'} />
            </div>
            <div className="flex relative">
              <Image
                imgSrc={BannerProfile}
                className={'h-[570px] w-[570px] rounded-full'}
              />
              <Image imgSrc={Victor} className={'absolute bottom-5 left-5'} />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Banner
