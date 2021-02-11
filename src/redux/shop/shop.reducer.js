import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
	name: 'shop',
	initialState: {
		collections: []
	},
	reducers: {
		setCollectionsData: (state, action) => {
			state.collections = action.payload;
		}
	}
});

export const { setCollectionsData } = shopSlice.actions;

export default shopSlice.reducer;