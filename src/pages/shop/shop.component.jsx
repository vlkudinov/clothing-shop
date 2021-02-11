import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionPageContainer from 'pages/collection/collection.container';
import CollectionOverviewContainer from 'components/collections-overview/collection-overview.container'
import { useDispatch } from 'react-redux';
import { fetchCollections } from 'redux/shop/shop.asyncThunks';

const ShopPage = ({ match }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCollections());
	}, [ dispatch ]);

	return (
		<div className='shop-page'>
			<Route exact
			       path={`${match.path}`}
			       component={CollectionOverviewContainer}
			/>
			<Route exact
			       path={`${match.path}/:collectionId`}
			       component={CollectionPageContainer}
			/>
		</div>
	);
};

export default ShopPage;
