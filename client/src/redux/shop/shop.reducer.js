import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
	name: 'shop',
	initialState: {
		collections: [],
		loading: false,
		error: null
	},
	reducers: {
		fetchCollectionsStart: (state, action) => {
			state.loading = true;
		},
		fetchCollectionsSuccess: (state, action) => {
			state.collections = action.payload;
			state.loading = false;
		},
		fetchCollectionsError: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		}
	}
});
export const { fetchCollectionsStart, fetchCollectionsSuccess, fetchCollectionsError } = shopSlice.actions;

export default shopSlice.reducer;