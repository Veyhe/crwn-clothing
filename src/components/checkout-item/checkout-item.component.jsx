import {
  CheckoutItemContainer,
  ImageContainer,
  NamePrice,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NamePrice as="span">{name}</NamePrice>
      <Quantity>
        <Arrow onClick={() => removeItemFromCart(cartItem)}>&#10094;</Arrow>

        <Value as="span">{quantity}</Value>

        <Arrow onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <NamePrice as="span">{price}</NamePrice>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
