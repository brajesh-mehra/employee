import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../root-reducer/root-reducer';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

const logger = createLogger({});

const configureStore = (initialState) => {
  const middlewares = [
    promise(),
    logger
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  )
  );
  return store;
}

export default configureStore;
