import { Container, Header, Block, Total } from './checkout.styles';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <Container>
      <Header>
        <Block>
          <span>Product</span>
        </Block>
        <Block>
          <span>Description</span>
        </Block>
        <Block>
          <span>Quantitiy</span>
        </Block>
        <Block>
          <span>Price</span>
        </Block>
        <Block>
          <span>Remove</span>
        </Block>
      </Header>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total as="span">Total: ${cartTotal}</Total>
    </Container>
  );
};

export default Checkout;
