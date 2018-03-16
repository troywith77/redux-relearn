import todos from './todos/todos';
import visibilityFilter from './visibilityFilter';

// const rootReducer = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }

const combineReducers = (reducers) => {
  // return root reducer
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      return {
        ...nextState,
        // compose reducer
        [key]: reducers[key](
          state[key],
          action
        )
      }
    }, {})
  }
}

// rootReducer 是由更小粒度的reducer函数compose的
const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

export default rootReducer