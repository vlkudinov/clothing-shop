import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from 'components/cart-item/cart-item.component';
import Button from 'components/_common/button/button.component';
import { toggleCartHidden } from 'redux/cart/cart.reducer';
import { CartDropdownContainer, CartItems, EmptyMessage } from 'components/cart-dropdown/cart-dropdown.styles';

const CartDropdown = ({ hidden, history }) => {
	const { items } = useSelector((state) => state.cart, shallowEqual);
	const dispatch = useDispatch();
	const handleClick = () => {
		history.push('/checkout');
		dispatch(toggleCartHidden());
	};

	if (hidden) {
		return null;
	}

	return (
		<CartDropdownContainer>
			<CartItems>
				{items.length
					? items.map(item => <CartItem key={item.id} item={item}/>)
					: <EmptyMessage>Your cart is empty</EmptyMessage>
				}
			</CartItems>
			<Button onClick={handleClick}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default withRouter(CartDropdown);
