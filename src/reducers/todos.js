import expect from 'expect';
import deepFreeze from 'deep-freeze';

const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (action.id !== state.id) {
        return state
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
};

const initialTodos = [
  {
    id: 0,
    text: 'Learn Redux',
    completed: false
  },
  {
    id: 1,
    text: 'Go Shopping',
    completed: true
  }
]

const todos = (state = initialTodos, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const _action = {
        ...action,
        id: state.reduce((nextId) => nextId + 1, 0)
      }
      return [
        ...state,
        todo(undefined, _action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 0
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: true
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: false
    }
  ];
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();
// console.log('All tests passed.');

export default todos;