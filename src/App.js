import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/header/header.component';
import Homepage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SignInSignUpPage from 'pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from 'pages/checkout/checkout.component';
import { auth } from 'firebase/firebase.utils';
import { createUserProfileDocument } from 'firebase/firebase.users.api';
import { setCurrentUser } from 'redux/user/user.reducer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import './App.scss';

const App = () => {
	const { currentUser } = useSelector(
		(state) => state.user
		, shallowEqual);

	const dispatch = useDispatch();
	useEffect(() => {
		let unsubscribeFromAuth = null;

		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					const { displayName, email, photoURL, creatAt } = snapshot.data();

					dispatch(setCurrentUser({
						id: snapshot.id,
						creatAt: creatAt.seconds,
						displayName,
						email,
						photoURL
					}));
				});
			}
			dispatch(setCurrentUser(null));
		});
		return () => typeof unsubscribeFromAuth === 'function' && unsubscribeFromAuth();
	}, [ dispatch ]);

	return (
		<div>
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
