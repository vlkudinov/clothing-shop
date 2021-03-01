import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/header/header.component';
import Homepage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SignInSignUpPage from 'pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from 'pages/checkout/checkout.component';
import { checkUserSession } from 'redux/user/user.reducer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { GlobalStyles } from 'global.styles';

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
				<Route exact path='/' component={Homepage}/>
				<Route path='/shop' component={ShopPage}/>
				<Route exact path='/sign-in' render={() => currentUser ? <Redirect to='/'/> : <SignInSignUpPage/>}/>
				<Route exact path='/checkout' component={CheckoutPage}/>
			</Switch>
		</div>
	);
};

export default App;
