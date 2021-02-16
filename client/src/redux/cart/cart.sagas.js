import { takeLatest, call, put, all } from 'redux-saga/effects';
import { clearCart } from './cart.reducer';
import { signOutSuccess } from 'redux/user/user.reducer';
import { paymentConfirmSuccess } from 'redux/billing/billing.reducer';

function* clearCartOnSignOut(){
	yield put(clearCart());
}

function* clearCartPaymentSuccess(){
	yield put(clearCart());
}

function* onSignOutSuccess(){
	yield takeLatest(signOutSuccess, clearCartOnSignOut);
}

function* onPaymentSuccess(){
	yield takeLatest(paymentConfirmSuccess, clearCartPaymentSuccess);
}

export function* cartSaga(){
	yield all([
			call(onSignOutSuccess),
			call(onPaymentSuccess)
		]
	);
}