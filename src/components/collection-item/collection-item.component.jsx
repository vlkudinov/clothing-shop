import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from 'redux/cart/cart.reducer';
import {
	CollectionItemContainer,
	BackgroundImage,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
	AddButton
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
	const { name, price, imageUrl } = item;
	const dispatch = useDispatch();

	return (
		<CollectionItemContainer>
			<BackgroundImage imageUrl={imageUrl}/>
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>${price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton onClick={() => dispatch(addItem(item))}>ADD TO CART</AddButton>
		</CollectionItemContainer>
	);
};

export default CollectionItem;