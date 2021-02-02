import { combineReducers } from 'redux';
import MythListReducer from './MythListReducer';
const RootReducer = combineReducers({
    MythList:MythListReducer
});
export default RootReducer;
