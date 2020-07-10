import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

//melakukan combine pada reducer untuk mengakses counter dan todos
export default combineReducers({ counter,todos });
