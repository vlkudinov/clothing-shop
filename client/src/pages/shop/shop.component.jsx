import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import Spinner from 'components/spinner/spinner.component';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from 'redux/shop/shop.reducer';

const CollectionOverviewContainer = lazy(() => import('components/collections-overview/collection-overview.container'));
const CollectionPageContainer = lazy(() => import('pages/collection/collection.container'))

const ShopPage = ({ match }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCollectionsStart());
	}, [ dispatch ]);

	return (
		<div className='shop-page'>
			<Suspense fallback={<Spinner/>}>
				<Route
					exact
				  path={`${match.path}`}
				  component={CollectionOverviewContainer}
				/>
				<Route
				  path={`${match.path}/:collectionId`}
				  component={CollectionPageContainer}
				/>
			</Suspense>
		</div>
	);
};

export default ShopPage;
