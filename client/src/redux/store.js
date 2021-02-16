import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rooReducer from './root-reducer';
import rootSaga from './root-saga';

const DEV = process.env.NODE_ENV !== 'production';

const logger = createLogger({
	predicate: () => DEV
});

const sagaMiddleware = createSagaMiddleware();

const defaultMiddleware = getDefaultMiddleware({
	immutableCheck: true,
	serializableCheck: false,
	thunk: false
});

export const store = configureStore({
	reducer: rooReducer,
	middleware: [ ...defaultMiddleware, logger, sagaMiddleware ],
	devTools: DEV
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);