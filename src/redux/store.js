import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rooteReducer from './root-reducer';
import thunk from 'redux-thunk';

const middleware = [ thunk ];

export const store = createStore(rooteReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
export default { store, persistor };
