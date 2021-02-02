import { combineReducers } from 'redux';
import MythListReducer from './MythListReducer';
const RootReducer = combineReducers({
    MythListRed:MythListReducer
});
export default RootReducer;
