import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import searchReducer from './reducers/searchReducer';
import styleReducer from './reducers/styleReducer';
import orderReducer from './reducers/orderReducer';
import authReducer from './reducers/authReducer';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
];
const reducer = combineReducers({
  route: routerReducer,
  search: searchReducer,
  order: orderReducer,
  style: styleReducer,
  auth: authReducer,
});

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  reducer,
  initialState,
  composedEnhancers,
);

export default store;
