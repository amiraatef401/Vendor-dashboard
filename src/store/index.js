import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './reducers';

export default combineReducers({
  app: appReducer,
  form: formReducer,

});
