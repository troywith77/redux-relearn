import expect from 'expect';
import deepFreeze from 'deep-freeze';

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const testSetVisibilityFilter = () => {
  const stateBefore = 'SHOW_ALL';
  const action = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
  };
  const stateAfter = 'SHOW_COMPLETED'
  deepFreeze(stateBefore)
  deepFreeze(action)
  expect(
    visibilityFilter(stateBefore, action)
  ).toEqual(stateAfter)
};

testSetVisibilityFilter();
// console.log('visibilityFilter test passed.');

export default visibilityFilter;