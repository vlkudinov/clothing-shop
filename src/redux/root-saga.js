import { all, call } from 'redux-saga/effects';
import { fetchCollectionStart } from 'redux/shop/shop.sagas';

export default function* rootSaga(){
	yield all([ call(fetchCollectionStart) ]);
}