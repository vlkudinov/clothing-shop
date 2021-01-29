import {createSlice} from '@reduxjs/toolkit'
import {addItemToCart} from './cart.utils';

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
		}
	}
});

export const {toggleCartHidden, addItem} = cartSlice.actions;

export default cartSlice.reducer;