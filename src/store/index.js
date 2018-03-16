import { createStore } from 'redux';
import { throttle } from 'lodash';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persisterState = loadState();
  const store = createStore(rootReducer, persisterState)

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