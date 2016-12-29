import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

export default function configureStore(){
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunk
    ),
    autoRehydrate()
  );
  persistStore(store);

  return store;
}