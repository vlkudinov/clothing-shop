import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		loading: false,
		error: ''
	},
	reducers: {
		signUpStart: () => {},
		signUpSuccess: () => {},
		signUpFailure: (state, action) => {
			state.error = action.payload;
		},
		googleSignInStart: () => {},
		emailSignInStart: (state, action) => {},
		signInSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.error = null;
		},
		signInFailure: (state, action) => {
			state.error = action.payload;
		},
		signOutStart: () => {},
		signOutSuccess: (state) => {
			state.currentUser = null;
			state.error = null;
		},
		signOutFailure: (state, action) => {
			state.error = action.payload;
		},
		checkUserSession: () => {}
	}
});

export const {
	signUpStart,
	signUpSuccess,
	signUpFailure,
	googleSignInStart,
	emailSignInStart,
	signInSuccess,
	signInFailure,
	signOutStart,
	signOutSuccess,
	signOutFailure,
	checkUserSession
} = userSlice.actions;

export default userSlice.reducer;