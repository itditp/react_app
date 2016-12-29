import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

/*export default function configureStore(initialState) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		rootReducer,
		composeEnhancers( applyMiddleware(thunk, reduxImmutableStateInvariant()) )
	);
}*/


/*
export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers( applyMiddleware(thunk, reduxImmutableStateInvariant()) ),
    autoRehydrate()
  );
  persistStore(store);
  return store;
}

*/


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