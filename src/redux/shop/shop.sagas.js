import { takeEvery, put } from 'redux-saga/effects';
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

export function* fetchCollectionStart(){
	yield takeEvery(fetchCollectionsStart, fetchCollectionAsync);
}