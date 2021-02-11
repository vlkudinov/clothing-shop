import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from 'components/collections-overview/collections-overview.component';
import CollectionPage from 'pages/collection/collection.component';
import withSpinner from 'components/with-spinner/with-spinner.component';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setCollectionsData } from 'redux/shop/shop.reducer';
import { getCollections } from '../../firebase/firebase.shop.api';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({ match }) => {
	const [ loading, setLoading ] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		getCollections().then(data => {
			dispatch(setCollectionsData(data));
			setLoading(false);
		});

	}, [ dispatch ]);

	return (
		<div className='shop-page'>
			<Route exact
			       path={`${match.path}`}
			       render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}
			/>
			<Route exact
			       path={`${match.path}/:collectionId`}
			       render={props => <CollectionPageWithSpinner isLoading={loading} {...props}/>}
			/>
		</div>
	);
};

export default ShopPage;
