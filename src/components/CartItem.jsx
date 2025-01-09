import React from 'react';
import Image from '../components/Image';

const CartItem = (props) => {
  const { ImageOne, IconOne, text } = props;
  return (
    <>
      <div className="h-[408px] w-[342px] rounded-b-3xl shadow-lg group">
        <div className="h-[225px] relative">
          <Image imgSrc={ImageOne} className={'absolute z-10'} />
          <Image imgSrc={IconOne} className={''} />
          <div className="mt-20 px-9">
            <h3 className="font-bold font-Nunito text-2xl group-hover:text-Blue">
              {text}
            </h3>
            <h3 className="font-DM_sans w-[272px] pt-3">
              Contrary to popular belief, Lorem Ips is not simply random text.
              It has root in a piece of classical.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem
