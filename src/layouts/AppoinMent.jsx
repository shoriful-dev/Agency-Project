import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex';
import Image from '../components/Image';
import Target from '../assets/target.png';
import Funfact from "../assets/Funfact.png";

const AppoinMent = () => {
  return (
    <>
      <div className="relative mt-40 mb-40">
        <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2">
          <Image imgSrc={Funfact} />
        </div>
        <Container
          className={'bg-Blue rounded-[50px] py-[100px] px-20'}
        >
          <Flex className={'justify-between pt-16'}>
            <div className="">
              <iframe
                className="rounded-3xl"
                width="592"
                height="566"
                src="https://www.youtube.com/embed/T5oS5DHtCt0?si=jbSgRHxRUBgQEUIi"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="text-white">
              <div className="flex space-x-3 items-center">
                <Image imgSrc={Target} className={'h-[22px]'} />
                <h3 className="text-xl font-medium font-DM_sans">
                  Make an Appointment
                </h3>
              </div>
              <h3 className="font-bold text-5xl font-Nunito pt-5">
                Start New Project With Us
              </h3>
              <div className="w-[608px]">
                <div className="w-[608px] flex space-x-5 pt-10">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-placeHolder w-[294px] h-[56px] px-5 rounded-full outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="text-placeHolder w-[294px] h-[56px] px-5 rounded-full outline-none"
                  />
                </div>
                <div className="pt-10">
                  <input
                    type="text"
                    placeholder="Business Topic"
                    className="text-placeHolder w-[608px] h-[56px] px-5 rounded-full outline-none"
                  />
                </div>
                <div className="pt-10">
                  <textarea
                    placeholder="Your Message"
                    className="text-placeHolder w-[608px] h-[171px] p-5 rounded-2xl resize-none outline-none align-top"
                    rows="1"
                  ></textarea>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default AppoinMent;
