import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';
const Store= createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default Store;