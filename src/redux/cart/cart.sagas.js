import { takeLatest, call, put, all } from 'redux-saga/effects';
import { clearCart } from './cart.reducer';
import { signOutSuccess } from 'redux/user/user.reducer';


function* clearCartOnSignOut(){
	yield put(clearCart());
}

function* onSignOutSuccess(){
	yield takeLatest(signOutSuccess, clearCartOnSignOut);
}

export function* cartSaga(){
	yield all([ call(onSignOutSuccess) ]);
}