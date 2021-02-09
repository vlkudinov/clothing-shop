import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		loading: false,
		error: ''
	},
	reducers: {
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload;
		}
	}
});

export const { setCurrentUser } = movieSlice.actions;

export default movieSlice.reducer;