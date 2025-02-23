import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Button from '../components/Button';
import Image from '../components/Image';
import RightImage from '../assets/ContactRightImage.png';

const Contact = () => {
  return (
    <>
      <div className="bg-HeroBanner h-[554px] relative left-0 top-[-150px] -z-30 mb-[-50px]">
        <div className="">
          <h1 className="text-5xl font-bold font-Nunito text-center text-white pt-72">
            Contact Us
          </h1>
        </div>
      </div>
      <Container className={'flex'}>
        <div className="w-full h-[750px] rounded-3xl bg-ofWhite mb-20 py-16 justify-between flex relative">
          <div className="w-[50%]">
            <h3 className="text-5xl font-bold font-Nunito px-20">
              Contact With Us
            </h3>
            <p className="font-DM_sans px-20 pt-3">
              Send us a message and we`ll respond as soon as possible
            </p>
            <Flex className={'flex-wrap space-y-5 px-20 pt-10'}>
              <div className="flex space-x-5">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="text-sm text-placeHolder py-3 w-[278px] rounded-3xl px-5 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="text-sm text-placeHolder py-3 w-[278px] rounded-3xl px-5 outline-none"
                />
              </div>
              <div className="flex space-x-5">
                <input
                  type="text"
                  placeholder="Email Address*"
                  className="text-sm text-placeHolder py-3 w-[278px] rounded-3xl px-5 outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number*"
                  className="text-sm text-placeHolder py-3 w-[278px] rounded-3xl px-5 outline-none"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Subject"
                  className="text-sm text-placeHolder py-3 w-[576px] rounded-3xl px-5 outline-none"
                />
                <textarea
                  name="text"
                  id="text"
                  placeholder="Your Message here"
                  className="h-[180px] w-[576px] resize-none rounded-3xl outline-none py-5 px-5 mt-10"
                ></textarea>
              </div>
              <div className="">
                <Button btnText={'Send Message'} className={'w-[576px] mt-6'} />
              </div>
            </Flex>
          </div>
          <div className="w-[50%]">
            <Image
              imgSrc={RightImage}
              className={
                'w-[708px] h-[780px] absolute top-[-17px] right-[-18px]'
              }
            />
          </div>
        </div>
      </Container>
        <div className="flex justify-center items-center p-4 bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.62426372686!2d90.32108107293853!3d23.810542905786974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1736817396404!5m2!1sen!2sbd"
            className="w-full max-w-[1920px] h-[500px] border-0 rounded-lg shadow-lg"
            allowfullscreen=""
            loading="lazy"
            title="map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </>
  );
}

export default Contact;
