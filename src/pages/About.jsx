import React from 'react'
import Cart from '../layouts/Cart';
import AboutOurCompany from '../layouts/AboutOurCompany';
import WhyChooseOrtencey from '../layouts/WhyChooseOrtencey';
import ReasonOfOurSuccess from '../components/ReasonOfOurSuccess';
import TeamMember from '../layouts/TeamMember';

const About = () => {
  return (
    <>
      <div className="bg-HeroBanner h-[554px] relative left-0 top-[-150px] -z-30 mb-[-50px]">
        <div className="">
          <h1 className="text-5xl font-bold font-Nunito text-center text-white pt-72">
            About Us
          </h1>
        </div>
      </div>
      <Cart />
      <AboutOurCompany />
      <WhyChooseOrtencey />
      <ReasonOfOurSuccess />
      <TeamMember />
    </>
  );
}

export default About
