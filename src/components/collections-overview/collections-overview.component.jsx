import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from 'redux/shop/shop.selectors';
import CollectionPreview from 'components/collection-preview/collection-preview.component';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionOverview = () => {
	const collections = useSelector(selectCollectionsForPreview);

	return (
		<CollectionsOverviewContainer>
			{collections.map(({ id, ...props }) =>
				<CollectionPreview key={id} {...props}/>
			)}
		</CollectionsOverviewContainer>
	);

};

export default CollectionOverview;