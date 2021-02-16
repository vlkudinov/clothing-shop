import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[ selectCart ],
	cart => cart.items
);

export const selectCartItemsCount = createSelector(
	[ selectCartItems ],
	cartItems => cartItems.reduce((acc, { quantity }) => acc + quantity, 0)
);

export const selectTotalCount = createSelector(
	[ selectCartItems ],
	cartItems => cartItems.reduce((acc, { price, quantity }) => acc + quantity * price, 0)
);


