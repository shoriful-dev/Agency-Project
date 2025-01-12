import React from 'react'
import OurServices from '../components/OurServices';
import WorkProses from '../components/WorkProses';
import LetSupport from '../components/LetSupport';
import Testimonial from '../layouts/Testimonial';

const Services = () => {
  return (
    <>
      <div className="bg-HeroBanner h-[554px] relative left-0 top-[-150px] -z-30 mb-[-50px]">
        <div className="">
          <h1 className="text-5xl font-bold font-Nunito text-center text-white pt-72">
            Service
          </h1>
        </div>
      </div>
      <OurServices />
      <WorkProses />
      <LetSupport />
      <Testimonial />
    </>
  );
}

export default Services
