import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routeReducer } from 'react-router-redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

const middleware = [
  thunkMiddleware,
  promiseMiddleware
];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const reducer = combineReducers({
});

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState, window.devToolsExtension && window.devToolsExtension());
  return store;
}
