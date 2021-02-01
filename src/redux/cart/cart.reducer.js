import {createSlice} from '@reduxjs/toolkit'
import {addItemToCart, removeItemFromCart} from './cart.utils';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		hidden: true,
		items: []
	},
	reducers: {
		toggleCartHidden: (state) => {
			state.hidden = !state.hidden;
		},
		addItem: (state, action) => {
			state.items = addItemToCart(state.items, action.payload);
		},
		removeItem: (state, action) => {
			state.items = removeItemFromCart(state.items, action.payload)
		},
		clearItemFromCart: (state, action) => {
			state.items = state.items.filter(
				cartItem => cartItem.id !== action.payload.id
			)
		}
	}
});

export const {toggleCartHidden, addItem, removeItem, clearItemFromCart} = cartSlice.actions;

export default cartSlice.reducer;