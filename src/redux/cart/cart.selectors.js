import {createSelector} from 'reselect';

const selectCartItems = state => state.cart.items;

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems => 	cartItems.reduce((acc, {quantity}) => acc + quantity, 0)
)
