import { combineReducers } from 'redux';
import MythItemReducer from './MythItemReducer';
import MythListReducer from './MythListReducer';
const RootReducer = combineReducers({
    MythList:MythListReducer,
    MythItem:MythItemReducer
});
export default RootReducer;
