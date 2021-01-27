import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger }  from 'redux-logger'
import reducers from './root-reducer';

const DEV = process.env.NODE_ENV !== 'production';

const logger = createLogger({
	predicate: () => DEV
});

const defaultMiddleware = getDefaultMiddleware({
	immutableCheck: true,
	serializableCheck: true,
	thunk: true
});

export const store = configureStore({
	reducer: {...reducers},
	middleware: [...defaultMiddleware, logger],
	devTools: DEV,
});