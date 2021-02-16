import { createSelector } from 'reselect';

const selectBilling = state => state.billing;

export const selectClientSecret = createSelector(
	[selectBilling],
	billing => billing.clientSecret
)