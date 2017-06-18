import {combineReducers} from 'redux';
import WarrantiesList from './reducer_warranties_list';

const rootReducer = combineReducers({
  list: WarrantiesList
});

export default rootReducer;
