import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { selectCollection } from 'redux/shop/shop.selectors';
import CollectionItem from 'components/collection-item/collection-item.component';
import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ match }) => {
	const collection = useSelector(selectCollection(match.params.collectionId), shallowEqual);

	if (!collection) {
		return null;
	}

	const { title, items } = collection;

	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map((item) =>
					<CollectionItem key={item.id} item={item}/>
				)}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

export default CollectionPage;
