import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import reducer from './root-reducer';

const DEV = process.env.NODE_ENV !== 'production';

const logger = createLogger({
	predicate: () => DEV
});

const defaultMiddleware = getDefaultMiddleware({
	immutableCheck: true,
	serializableCheck: false,
	thunk: true
});

export const store = configureStore({
	reducer,
	middleware: [ ...defaultMiddleware, logger ],
	devTools: DEV
});

export const persistor = persistStore(store);