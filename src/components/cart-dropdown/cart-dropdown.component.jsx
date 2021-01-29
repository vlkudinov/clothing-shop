import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import CartItem from 'components/cart-item/cart-item.component';
import Button from 'components/_common/button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({hidden}) => {
	const {items} = useSelector((state) => state.cart, shallowEqual)

	if (hidden) {
		return null;
	}

	return (
		<div className='cart-dropdown'>
			<div className="cart-dropdown__cart-items">
			{
				items.map(item =>
					<CartItem key={item.id} item={item}/>
				)
			}
			</div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	)
}

export default CartDropdown;
