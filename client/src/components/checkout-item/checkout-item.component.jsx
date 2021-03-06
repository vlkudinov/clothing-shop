import React from 'react';
import {
	CheckoutItemContainer,
	ImageContainer,
	TextContainer,
	QuantityContainer,
	RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ item, addItem, removeItem, clearItemFromCart }) => {
	const { name, quantity, price, imageUrl } = item;

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt='item'/>
			</ImageContainer>
			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<div onClick={removeItem}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={addItem}>&#10095;</div>
			</QuantityContainer>
			<TextContainer>${price}</TextContainer>
			<RemoveButtonContainer onClick={clearItemFromCart}>&#10005;</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;