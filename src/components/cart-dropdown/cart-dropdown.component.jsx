import React from 'react';
import Button from "../_common/button/button.component";

import './cart-dropdown.styles.scss';

const CartDropdown = ({hidden}) => {

	if (hidden) {
		return null;
	}

	return (
		<div className='cart-dropdown'>
			<div className="cart-dropdown__cart-items"/>
			<Button>GO TO CHECKOUT</Button>
		</div>
	)
}

export default CartDropdown;
