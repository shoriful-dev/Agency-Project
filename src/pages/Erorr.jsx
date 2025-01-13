import React from 'react'
import Image from '../components/Image';
import Error from '../assets/Error.png';
import Container from '../components/Container';
import Button from '../components/Button';
import { Link } from 'react-router';

const Erorr = () => {
  return (
    <>
      <div className="bg-HeroBanner h-[554px] relative left-0 top-[-150px] -z-30 mb-[-50px]">
        <div className="">
          <h1 className="text-5xl font-bold font-Nunito text-center text-white pt-72">
            Error
          </h1>
        </div>
      </div>
      <Container>
        <div className="flex justify-center">
          <Image imgSrc={Error} />
        </div>
        <h3 className="font-bold font-Nunito text-2xl text-center pt-10">
          Oops! Page Not Found.
        </h3>
        <div className="justify-center flex pt-5">
          <p className="font-DM_sans w-[511px] text-center">
            The page you are looking for is not available or has been moved. Try
            a different page or go to homepage with the button below.
          </p>
        </div>
        <div className="flex justify-center pt-10 mb-20">
          <Link to={'/'}>
            <Button btnText={'Back to Home'} />
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Erorr
