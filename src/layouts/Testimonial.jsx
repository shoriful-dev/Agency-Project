import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Image from '../components/Image';
import TestimonialOne from '../assets/testimonialImageOne.png';
import TestimonialTwo from '../assets/testimonialImageTow.png';
import TestimonialThree from '../assets/testimonialImageThree.png';
import TestimonialFour from '../assets/testimonialImageFour.png';
import TestimonialFive from '../assets/testimonialImageFive.png';
import TestimonialSix from '../assets/testimonialImageSix.png';
import TestimonialSeven from '../assets/testimonialImageSeven.png';
import LineShape from '../assets/LineShape.png';
import Target from '../assets/target.png';
import Quets from '../assets/quets.png';
import Star from '../assets/Star.png';

const Testimonial = () => {
  return (
    <>
      <Container>
        <Flex className={'justify-between'}>
          <div className="mb-40 mt-10 flex justify-between">
            <div className="w-[550px] flex justify-between flex-wrap mr-40">
              <div className="pt-20">
                <Image
                  imgSrc={TestimonialOne}
                  className={
                    'h-[140px] w-[140px] rounded-2xl hover:border-b-8 border-red-500 duration-300'
                  }
                />
              </div>
              <div>
                <Image
                  imgSrc={TestimonialTwo}
                  className={
                    'h-[140px] w-[140px] rounded-2xl hover:border-b-8 border-red-500 duration-300'
                  }
                />
              </div>
              <div className="pt-20">
                <Image
                  imgSrc={TestimonialThree}
                  className={
                    'h-[140px] w-[140px] rounded-2xl hover:border-b-8 border-red-500 duration-300'
                  }
                />
              </div>
              <div className="pt-20">
                <Image
                  imgSrc={TestimonialFour}
                  className={
                    'h-[140px] w-[140px] rounded-2xl hover:border-b-8 border-red-500 duration-300'
                  }
                />
              </div>
              <div>
                <Image
                  imgSrc={TestimonialFive}
                  className={
                    'h-[140px] w-[140px] rounded-2xl hover:border-b-8 border-red-500 duration-300'
                  }
                />
              </div>
              <div className="pt-20">
                <Image
                  imgSrc={TestimonialSix}
                  className={
                    'h-[140px] w-[140px] rounded-2xl hover:border-b-8 border-red-500 duration-300'
                  }
                />
              </div>
              <div className="">
                <Image
                  imgSrc={TestimonialSeven}
                  className={
                    'h-[140px] w-[140px] rounded-2xl flex justify-center hover:border-b-8 border-red-500 duration-300 ml-[200px]'
                  }
                />
              </div>
            </div>
            <div className="">
              <Image imgSrc={LineShape} className={'mr-36'}/>
            </div>
            <div className="">
              <div className="flex space-x-3 items-center">
                <Image imgSrc={Target} className={'h-[22px]'} />
                <p className="text-xl font-medium text-Blue font-DM_sans">
                  Testimonial
                </p>
              </div>
              <h3 className="text-[46px] font-bold font-Nunito pt-5">
                What Our Client Say
              </h3>
              <div className="flex justify-between pt-10">
                <Image imgSrc={Quets} className={'h-[49px]'} />
                <Image imgSrc={Star} className={'h-[50px]'} />
              </div>
              <p className="text-xl font-DM_sans w-[562px] pt-10">
                There are many variations of passages of Lorem Ipsum availa the
                majority have suffered alteration in some form by injecte our,
                or rando word which dont look even slightly a believable. If you
                are going to use a passage of Lorem Ipsum, you need sure there
                isnt anything embarrassing.
              </p>
              <div className="pt-10">
                <h3 className="text-2xl font-Nunito font-bold">Kristin Waon</h3>
                <h3 className='font-DM_sans text-gray'>Web Designer</h3>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
}

export default Testimonial
