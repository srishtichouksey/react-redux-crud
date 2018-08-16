import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Admin } from './AdminUser';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
      		admin:Admin
      }),

      applyMiddleware(thunk,logger)
    );
    return store;
}