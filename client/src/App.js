import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/header/header.component';
import Spinner from 'components/spinner/spinner.component';
import ErrorBoundary from 'components/error-boundary/error-boundary.component';
import { checkUserSession } from 'redux/user/user.reducer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { GlobalStyles } from 'global.styles';

const HomePage = lazy(() => import('pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('pages/shop/shop.component'));
const SignInSignUpPage = lazy(() => import('pages/sign-in-sign-up/sign-in-sign-up.component'));
const CheckoutPage = lazy(() => import('pages/checkout/checkout.component'));

const App = () => {
	const { currentUser } = useSelector(
		(state) => state.user
		, shallowEqual);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkUserSession());
	}, [ dispatch ]);

	return (
		<div>
			<GlobalStyles/>
			<Header/>
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner/>}>
						<Route exact path='/' component={HomePage}/>
						<Route path='/shop' component={ShopPage}/>
						<Route exact path='/sign-in' render={() => currentUser ? <Redirect to='/'/> : <SignInSignUpPage/>}/>
						<Route exact path='/checkout' component={CheckoutPage}/>
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

export default App;
