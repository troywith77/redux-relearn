import { combineReducers } from 'redux';
import todo from './todo';

const byId = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.payload.id]: todo(state[action.payload.id], action)
      }
    default:
      return state
  }
};

const allIds = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      return [...state, action.payload.id]
    }
    default:
      return state
  }
}

const todos = combineReducers({
  byId,
  allIds
})

export default todos;

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, visibilityFilter) => {
  const todos = getAllTodos(state);
  switch(visibilityFilter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
    return todos.filter(t => !t.completed)
    default:
      return todos
  }
};