import { createStore, compose } from 'redux';
import { throttle } from 'lodash';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  // applyMiddleware(...middleware),
);

const withLoggingDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) return rawDispatch;

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray');
    console.log(store.getState());
    console.log('%c action', 'color: blue');
    console.log(action);
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green');
    console.log(store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {
  const persisterState = loadState();
  const store = createStore(rootReducer, persisterState, enhancer)

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = withLoggingDispatch(store);
  }

  store.subscribe(
    throttle(() => {
      const { visibilityFilter, ...others } = store.getState();
      saveState(others);
    }, 1000)
  );

  return store
};

export default configureStore;