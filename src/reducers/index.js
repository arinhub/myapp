import { combineReducers } from 'redux';
import items from './items';
import searchedData from './searchedData';

export default combineReducers({
    items,
    searchedData
});
