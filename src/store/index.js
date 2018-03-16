import { createStore, compose } from 'redux';
import { throttle } from 'lodash';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;

  const enhancer = composeEnhancers(
    // applyMiddleware(...middleware),
  );

  const persisterState = loadState();
  const store = createStore(rootReducer, persisterState, enhancer)

  store.subscribe(throttle(() => {
    const {
      visibilityFilter,
      ...others
    } = store.getState();

    saveState(others);
  }, 1000));

  return store
};

export default configureStore;