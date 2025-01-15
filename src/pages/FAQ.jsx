import React from 'react'
import Container from '../components/Container';
import Image from '../components/Image';
import Target from '../assets/target.png';
import Genarel from '../assets/GeneralQuestions.png';
import Community from '../assets/Community.png';
import Support from '../assets/Support.png';
import Accordian from '../assets/accordian.png';
import { Link } from 'react-router';
import Accordion from '../components/Accordian';
import OurSurvice from '../assets/ourServicesTwo.png';
import Button from '../components/Button';

const FAQ = () => {
  return (
    <>
      <div className="bg-HeroBanner h-[554px] relative left-0 top-[-150px] -z-30 mb-[-50px]">
        <div className="">
          <h1 className="text-5xl font-bold font-Nunito text-center text-white pt-72">
            FAQ
          </h1>
        </div>
      </div>
      <Container>
        <div className="flex justify-between mb-20">
          <div className="">
            <span className="flex items-center space-x-3">
              <Image imgSrc={Target} className={'h-[22px]'} />
              <h3 className="text-xl font-medium font-DM_sans bg-gradient-to-r from-[#FE651B] to-[#FFAA52] text-transparent bg-clip-text">
                Common Questions
              </h3>
            </span>
            <h3 className="text-5xl font-Nunito font-bold pt-5">
              Frequently Asked Questions
            </h3>
            <div className="flex space-x-10">
              <div className="pt-10 flex flex-wrap w-[289px] h-[280px]">
                <Link to={''}>
                  <Image imgSrc={Genarel} />
                </Link>
                <Link to={''}>
                  <Image imgSrc={Community} />
                </Link>
                <Link to={''}>
                  <Image imgSrc={Support} />
                </Link>
              </div>
              <div className="pt-10">
                <Image imgSrc={Accordian} />
              </div>
            </div>
          </div>
          <div className="right-side">
            <Accordion />
          </div>
        </div>
      </Container>
      <div className="bg-AskAnyQuestion h-[733px] py-[120px]">
        <Container className={'flex justify-between'}>
          <div className="w-[50%]">
            <Image
              imgSrc={OurSurvice}
              className={'w-[647px] h-[494px] rounded-2xl'}
            />
          </div>
          <div className="w-[50%]">
            <h3 className="text-5xl font-Nunito font-bold">Ask any Question</h3>
            <p className="font-DM_sans w-[506px] pt-5 pb-5">
              Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing
              as dignissim eu a ad venenatis.
            </p>
            <div className="space-x-5 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[344px] h-[56px] rounded-full px-5 outline-none text-placeHolder"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="w-[344px] h-[56px] rounded-full px-5 outline-none text-placeHolder"
              />
            </div>
            <textarea
              name="text"
              id="text"
              placeholder="Your Message"
              className="resize-none rounded-2xl h-[171px] w-[708px] py-5 px-5 outline-none text-placeHolder mt-5"
            ></textarea>
            <Button btnText={'Send Message'} className={'mt-10'}/>
          </div>
        </Container>
      </div>
    </>
  );
}

export default FAQ
