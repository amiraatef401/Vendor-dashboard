import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import vendorReducer from './vendorReducer';

export default combineReducers({
  vendor: vendorReducer,
  loginForm: formReducer,
});
