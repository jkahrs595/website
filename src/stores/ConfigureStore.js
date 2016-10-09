import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware  } from 'react-router-redux';
import { browserHistory } from 'react-router';
import {reducer as formReducer} from 'redux-form';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import NavReducer from '../nav/redux/NavReducer';

const middleware = [
  thunkMiddleware,
  promiseMiddleware,
  routerMiddleware(browserHistory)
];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const reducer = combineReducers({
  navState: NavReducer,
  routing: routerReducer,
  formState: formReducer
});

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState, window.devToolsExtension && window.devToolsExtension());
   return store;
}
