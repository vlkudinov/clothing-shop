import { takeEvery, put, all, call } from 'redux-saga/effects';
import { fetchCollectionsStart, fetchCollectionsSuccess, fetchCollectionsError } from './shop.reducer';
import * as shopAPI from '../../firebase/firebase.shop.api';

function* fetchCollectionAsync(){
	try {
		const collections = yield shopAPI.fetchCollections();
		yield put(fetchCollectionsSuccess(collections));

	} catch (error) {
		yield put(fetchCollectionsError(error.message));
	}
}

export function* onFetchCollection(){
	yield takeEvery(fetchCollectionsStart, fetchCollectionAsync);
}

export function* shopSaga(){
	yield all([ call(onFetchCollection) ]);
}