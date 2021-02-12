import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as googleAPI from 'firebase/firebase.utils';
import { createUserProfileDocument } from 'firebase/firebase.users.api';
import {
	signUpStart,
	signUpSuccess,
	signUpFailure,
	googleSignInStart,
	emailSignInStart,
	signInSuccess,
	signInFailure,
	signOutStart,
	signOutSuccess,
	signOutFailure,
	checkUserSession
} from './user.reducer';

function* getSnapshotFromUserAuth(userAuth, additionalData){
	try {
		const useRef = yield call(createUserProfileDocument, userAuth, additionalData);
		const userSnapshot = yield useRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

function* googleSignIn(){
	try {
		const { user } = yield googleAPI.auth.signInWithPopup(googleAPI.googleProvider);
		yield getSnapshotFromUserAuth(user);

	} catch (error) {
		yield put(signInFailure(error));
	}
}

function* emailSignIn({ payload: { email, password } }){
	try {
		const { user } = yield googleAPI.auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);

	} catch (error) {
		yield put(signInFailure(error));
	}
}

function* isUserAuthenticated(){
	try {
		const userAuth = yield googleAPI.getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);

	} catch (error) {
		yield put(signInFailure(error));
	}
}

function* signOut(){
	try {
		yield googleAPI.auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error));
	}
}

function* signUp({ payload: { email, password, displayName } }){
	try {
		const { user } = yield googleAPI.auth.createUserWithEmailAndPassword(email, password);
		yield put(signUpSuccess({ user, additionalData: { displayName } }));
	} catch (error) {
		yield put(signUpFailure(error));
	}
}

function* onSignUp(){
	yield takeLatest(signUpStart, signUp);
}

export function* onSignUpSuccess(){
	yield takeLatest(signUpSuccess, signInAfterSignUp);
}

export function* signInAfterSignUp({ payload: { user, additionalData } }){
	yield getSnapshotFromUserAuth(user, additionalData);
}

function* onEmailSignIn(){
	yield takeLatest(emailSignInStart, emailSignIn);
}

function* onGoogleSignIn(){
	yield takeLatest(googleSignInStart, googleSignIn);
}

function* onSignOut(){
	yield takeLatest(signOutStart, signOut);
}

function* onCheckUserSession(){
	yield takeLatest(checkUserSession, isUserAuthenticated);
}

export function* userSaga(){
	yield all([
		call(onSignUp),
		call(onSignUpSuccess),
		call(onEmailSignIn),
		call(onGoogleSignIn),
		call(onSignOut),
		call(onCheckUserSession)
	]);
}