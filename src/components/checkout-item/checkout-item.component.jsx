import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({item, addItem, removeItem, clearItemFromCart}) => {
	const {name, quantity, price, imageUrl} = item;

	return (
		<div className='checkout-item'>
			<div className="checkout-item__image-container">
				<img src={imageUrl} alt='item'/>
			</div>
			<span className='checkout-item__name'>{name}</span>
			<div className='checkout-item__quantity quantity'>
				<div className='quantity__arrow' onClick={removeItem}>&#10094;</div>
				<span className='quantity__value'>{quantity}</span>
				<div className='quantity__arrow' onClick={addItem}>&#10095;</div>

			</div>
			<span className='checkout-item__price'>${price}</span>
			<div className='checkout-item__remove-button' onClick={clearItemFromCart}>&#10005;</div>
		</div>
	)
};

export default CheckoutItem;