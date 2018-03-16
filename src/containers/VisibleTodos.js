import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers/todos';

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

// const mapDispatchToProps = dispatch => ({
//   onTodoClick: id => {
//     dispatch(toggleTodo(id))
//   }
// });
const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);