import React from 'react'
import Image from '../components/Image';
import Target from '../assets/target.png';
import Button from '../components/Button';


const WeAreHire = () => {
  return (
    <>
      <div className="bg-WeAreHireBg h-[466px] mb-20 relative">
        <div className="bg-black opacity-80 h-[466px]">
          <div className="w-[1200px] bg-[#3661FC] rounded-3xl py-[50px] px-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex space-x-3 items-center">
              <Image imgSrc={Target} className={'h-[22px]'} />
              <p className="text-xl text-white font-medium font-DM_sans">
                We Are Hire
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="w-[693px] font-bold text-[46px] font-Nunito text-white pt-5">
                Tell us About Your Business, We are Ready to Solve.
              </h3>
              <Button btnText={'Contact Us'} className={'w-[160px] h-[60px]'}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeAreHire
