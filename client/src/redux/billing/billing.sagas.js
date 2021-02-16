import { takeLatest, call, select, put, all } from 'redux-saga/effects';
import {
	paymentIntentStart,
	paymentIntentSuccess,
	paymentIntentFailure,
	paymentConfirmStart,
	paymentConfirmSuccess,
	paymentConfirmFailure,
} from 'redux/billing/billing.reducer';
import { selectTotalCount } from 'redux/cart/cart.selectors';
import { selectClientSecret } from 'redux/billing/billing.selectors';
import * as api from 'api/payment';

function* paymentIntent(){
	try {
		const amount = yield select(selectTotalCount);
		const { clientSecret } = yield call(api.paymentIntent, amount);
		yield put(paymentIntentSuccess(clientSecret));
	} catch (error) {
		yield put(paymentIntentFailure(error));
	}
}

function* paymentConfirm({payload: {stripe, data}}){
	try {
		const clientSecret = yield select(selectClientSecret);
		const { paymentIntent } = yield stripe.confirmCardPayment(clientSecret, data);
		yield put(paymentConfirmSuccess(paymentIntent));
	} catch (error) {
		yield put(paymentConfirmFailure(error));
	}
}

function* onPaymentIntentStart(){
	yield takeLatest(paymentIntentStart, paymentIntent);
}

function* onPaymentConfirmStart(){
	yield takeLatest(paymentConfirmStart, paymentConfirm);
}

export function* billingSaga(){
	yield all([
		call(onPaymentIntentStart),
		call(onPaymentConfirmStart)
	]);
}