import React from 'react';

import { ReactComponent as ShoppingBagIcon } from 'assets/shopping-bag.svg';

import './cart-icon.styles.scss'

const CartIcon = ({handleClick}) => (
	 <div className='cart-icon' onClick={handleClick}>
		 <ShoppingBagIcon className='cart-icon__svg'/>
		 <span className="cart-icon__item-count">0</span>
	 </div>
);

export default CartIcon;