import { createSlice } from '@reduxjs/toolkit';

const billingSlice = createSlice({
	name: 'billing',
	initialState: {
		clientSecret: null,
		paymentIntent: null,
		processing: false,
		succeeded: false
	},
	reducers: {
		paymentIntentStart: (state) => {
			state.paymentIntent = null;
		},
		paymentIntentSuccess: (state, action) => {
			state.clientSecret = action.payload;
			state.error = null
		},
		paymentIntentFailure: (state, action) => {
			state.error = action.payload
		},
		paymentConfirmStart: (state) => {
			state.processing = true;
		},
		paymentConfirmSuccess: (state, action) => {
			state.paymentIntent = action.payload;
			state.processing = false;
			state.succeeded = true;
		},
		paymentConfirmFailure: (state, action) => {
			state.error = action.payload;
			state.paymentIntent = null;
			state.processing = false;
		}
	}
});

export const {
	paymentIntentStart,
	paymentIntentSuccess,
	paymentIntentFailure,
	paymentConfirmStart,
	paymentConfirmSuccess,
	paymentConfirmFailure
} = billingSlice.actions;

export default billingSlice.reducer;