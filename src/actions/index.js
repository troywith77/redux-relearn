import cuid from 'cuid';

export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    text,
    id: cuid()
  }
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: {
    id
  }
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
