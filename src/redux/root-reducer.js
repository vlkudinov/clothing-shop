import { combineReducers } from 'redux';
import user from './user/user.reducer';
import cart from './cart/cart.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}


const rootReducers = combineReducers({
	user,
	cart
})

export default persistReducer(persistConfig, rootReducers);