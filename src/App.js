import React, {useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import Header from 'components/header/header.component';
import Homepage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SignInSignUp from "pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth} from 'firebase/firebase.utils';
import {createUserProfileDocument} from 'firebase/firebase.users.api';
import {setCurrentUser} from 'redux/user';
import {useDispatch} from 'react-redux'

import './App.scss'

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		let unsubscribeFromAuth = null;

		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot =>
					dispatch(setCurrentUser({id: snapshot.id, ...snapshot.data()})));
			}
			dispatch(setCurrentUser(null))
		})
		return () => typeof unsubscribeFromAuth === 'function' && unsubscribeFromAuth()
	}, [dispatch])

	return (
		<div>
			<Header/>
			<Switch>
				<Route exact path='/' component={Homepage}/>
				<Route path='/shop' component={ShopPage}/>
				<Route path='/sign-in' component={SignInSignUp}/>
			</Switch>
		</div>
	)
}

export default App;
