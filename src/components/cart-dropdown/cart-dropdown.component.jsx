import React from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {withRouter} from 'react-router-dom'
import CartItem from 'components/cart-item/cart-item.component';
import Button from 'components/_common/button/button.component';
import {toggleCartHidden} from 'redux/cart/cart.reducer';


import './cart-dropdown.styles.scss';

const CartDropdown = ({hidden, history}) => {
	const {items} = useSelector((state) => state.cart, shallowEqual)
	const dispatch = useDispatch();
	const handleClick = () => {
		history.push('/checkout');
		dispatch(toggleCartHidden());
	}

	if (hidden) {
		return null;
	}

	return (
		<div className='cart-dropdown'>
			<div className="cart-dropdown__cart-items">
			{items.length
				? items.map(item => <CartItem key={item.id} item={item}/>)
				: <span className='cart-dropdown__empty-message'>Your cart is empty</span>
			}
			</div>
			<Button onClick={handleClick}>GO TO CHECKOUT</Button>
		</div>
	)
}

export default withRouter(CartDropdown);
