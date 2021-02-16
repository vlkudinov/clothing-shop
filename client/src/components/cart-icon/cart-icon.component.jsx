import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from 'redux/cart/cart.selectors';
import { CartIconContainer, Icon, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ handleClick }) => {
	const cartItemsCount = useSelector(selectCartItemsCount);

	return (
		<CartIconContainer onClick={handleClick}>
			<Icon/>
			<ItemCountContainer>{cartItemsCount}</ItemCountContainer>
		</CartIconContainer>
	);
};

export default CartIcon;
