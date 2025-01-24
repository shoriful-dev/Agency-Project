import Container from '../components/Container';
import Button from '../components/Button';
import Image from '../components/Image';
import Victor from '../assets/Vector.png';
import Shape from '../assets/Shape.png';
import BannerProfile from '../assets/banner_Profile.png';

const Banner = () => {
  return (
    <>
      <div className="bg-bannerPic h-[950px] relative top-[-150px] left-0 -z-20">
        <Container
          className={'py-[250px] flex flex-col lg:flex-row justify-between'}
        >
          <div className="text-center lg:text-left xl:mt-28">
            <h3 className="bg-gradient-to-r from-[#FE651B] to-[#FFAA52] inline-block bg-clip-text text-transparent font-DM_sans font-medium text-2xl">
              Your Trusted Ortencey Agency
            </h3>
            <Image
              className={
                'absolute h-[600px] bottom-[130px] left-[50%] lg:left-[180px] transform -translate-x-1/2 lg:translate-x-0 -z-30'
              }
              imgSrc={Shape}
            />
            <h3 className="font-Nunito font-bold text-4xl lg:text-6xl w-full lg:w-[695px] text-white leading-[50px] lg:leading-[80px] pt-5 ant">
              Our Digital Agency With Excellence Services
            </h3>
            <h3 className="font-medium font-DM_sans text-lg lg:text-xl text-white w-full lg:w-[594px] pt-8 pb-16">
              The 3 golden rules professional Digital Marketing Agency don’t
              want you to know about.
            </h3>
            <Button btnText={'Discover More'} />
          </div>
          <div className="flex justify-center lg:justify-end relative mt-10 lg:mt-0 xl:mt-14">
            <Image
              imgSrc={BannerProfile}
              className={
                'h-[300px] w-[300px] lg:h-[570px] lg:w-[570px] rounded-full'
              }
            />
            <Image imgSrc={Victor} className={'absolute bottom-5 left-5'} />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Banner;




