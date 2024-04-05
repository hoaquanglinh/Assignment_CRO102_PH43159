import { createStore, combineReducers } from 'redux';
import userReducer from './reducers';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
