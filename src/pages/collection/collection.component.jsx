import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import {selectCollection} from 'redux/shop/shop.selectors';
import CollectionItem from 'components/collection-item/collection-item.component';
import './collection.styles.scss';

const Collection = ({match}) => {
	const collection = useSelector(selectCollection(match.params.collectionId), shallowEqual);

	if (!collection) {
		return null;
	}

	const {title, items} = collection

	return (
		<div className='collection-page'>
			<h2 className='collection-page__title'>{title}</h2>
			<div className="collection-page__items">
				{items.map((item) =>
					<CollectionItem key={item.id} item={item}/>
				)}
			</div>
		</div>
	)

};

export default Collection;