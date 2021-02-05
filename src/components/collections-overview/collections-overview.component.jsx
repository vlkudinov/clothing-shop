import React from 'react';
import {useSelector} from 'react-redux';
import {selectCollectionsForPreview} from 'redux/shop/shop.selectors';
import CollectionPreview from 'components/collection-preview/collection-preview.component';

import './collections-overview.styles.scss'

const CollectionOverview = () => {
	const collections = useSelector(selectCollectionsForPreview);
	console.log('collections', collections);
	return (
		<div className='collections-overview'>
			{collections.map(({id, ...props}) =>
				<CollectionPreview key={id} {...props}/>
			)}
		</div>
	)

};

export default CollectionOverview;