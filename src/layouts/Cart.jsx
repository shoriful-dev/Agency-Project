import Container from '../components/Container'
import Flex from '../components/Flex'
import CartItem from '../components/CartItem';
import cartIconOne from '../assets/cartIconOne.png';
import cartIconTwo from '../assets/cartIconTwo.png';
import cartIconThree from '../assets/cartIconThree.png';
import cartIconFour from '../assets/cartIconFour.png';
import cartImageOne from '../assets/CartBG.png';

const Cart = () => {
  return (
    <>
      <Container className={'mt-10 mb-20'}>
        <Flex className={'flex-wrap justify-between'}>
          <CartItem
            ImageOne={cartImageOne}
            IconOne={cartIconOne}
            text={'Graphics Design'}
            className={'w-full sm:w-1/2 lg:w-1/4'}
          />
          <CartItem
            ImageOne={cartImageOne}
            IconOne={cartIconTwo}
            text={'Web Developer'}
            className={'w-full sm:w-1/2 lg:w-1/4'}
          />
          <CartItem
            ImageOne={cartImageOne}
            IconOne={cartIconThree}
            text={'Digital Marketing'}
            className={'w-full sm:w-1/2 lg:w-1/4'}
          />
          <CartItem
            ImageOne={cartImageOne}
            IconOne={cartIconFour}
            text={'App Design'}
            className={'w-full sm:w-1/2 lg:w-1/4'}
          />
        </Flex>
      </Container>
    </>
  );
}

export default Cart;
