import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, visibilityFilter) => {
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

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    dispatch(toggleTodo(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);