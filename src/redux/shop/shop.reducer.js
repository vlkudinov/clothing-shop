import { createSlice } from '@reduxjs/toolkit';
import { fetchCollections } from './shop.asyncThunks';

const shopSlice = createSlice({
	name: 'shop',
	initialState: {
		collections: [],
		loading: false,
		error: null
	},
	reducers: {},
	extraReducers: {
		[fetchCollections.pending]: (state, action) => {
			state.loading = true;
		},
		[fetchCollections.fulfilled]: (state, action) => {
			state.collections = action.payload;
			state.loading = false;
		},
		[fetchCollections.rejected]: (state, action) => {
			state.error = action.payload.error;
			state.loading = false;
		}
	}
});

export default shopSlice.reducer;