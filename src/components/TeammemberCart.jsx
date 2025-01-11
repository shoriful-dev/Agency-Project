import React from 'react'
import Container from '../components/Container';
import Image from '../components/Image';

const TeammemberCart = (props) => {
  const { imgSrc, text, text2 } = props;
  return (
    <>
      <Container>
        <div className="">
          <div className="w-[341px] h-[446px] bg-white rounded-2xl shadow-xl">
            <div className="justify-center flex pt-5">
              <Image
                imgSrc={imgSrc}
                className={
                  'w-[301px] h-[319px] bg-cover bg-center bg-no-repeat rounded-2xl'
                }
              />
            </div>
            <div className="pt-5">
              <h3 className="text-2xl font-bold font-Nunito text-center">
                {text}
              </h3>
              <p className="font-DM_sans text-gray text-center">
                {text2}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default TeammemberCart
