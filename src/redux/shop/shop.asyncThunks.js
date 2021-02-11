import { createAsyncThunk } from '@reduxjs/toolkit';
import * as shopAPI from '../../firebase/firebase.shop.api';

export const fetchCollections = createAsyncThunk(
	'shop/fetchCollectionsStatus',
	async () => {
		return await shopAPI.fetchCollections();
	}
)