import { combineReducers } from 'redux';
import listReducer from './fileListReducer';
import dataReducer from './dataReducer';

export default combineReducers({
    list: listReducer,
    data: dataReducer
})