import React from 'react';
import {useDispatch} from 'react-redux';
import {addItem} from "redux/cart/cart.reducer";

import Button from 'components/_common/button/button.component';

import './collection-item.styles.scss';

const CollectionItem = ({item}) => {
	const {name, price, imageUrl} = item;
	const dispatch = useDispatch()

	return (
		<li className='collection-item'>
			<div className="collection-item__image" style={{backgroundImage: `url(${imageUrl})`}}/>
			<div className="collection-item__footer">
				<div className="collection-item__name">{name}</div>
				<div className="collection-item__price">{price}</div>
			</div>
			<Button onClick={() => dispatch(addItem(item))}>ADD TO CART</Button>
		</li>
	)
};

export default CollectionItem;