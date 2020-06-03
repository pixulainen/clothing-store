import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rooteReducer from './root-reducer';
const middleware = [ logger ];

const store = createStore(rooteReducer, applyMiddleware(...middleware));
export default store;
