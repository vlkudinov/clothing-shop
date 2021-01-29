import React from 'react';
import {useSelector} from 'react-redux';
import {selectCartItemsCount} from 'redux/cart/cart.selectors'
import {ReactComponent as ShoppingBagIcon} from 'assets/shopping-bag.svg';

import './cart-icon.styles.scss'

const CartIcon = ({handleClick}) => {
	const cartItemsCount = useSelector(selectCartItemsCount)

	return (
		<div className='cart-icon' onClick={handleClick}>
			<ShoppingBagIcon className='cart-icon__svg'/>
			<span className="cart-icon__item-count">{cartItemsCount}</span>
		</div>
	)
};

export default CartIcon;
