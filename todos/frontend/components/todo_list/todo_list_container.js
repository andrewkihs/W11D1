import { connect } from 'react-redux';
import TodoList from './todo_list';

// Actions
import { receiveTodos, receiveTodo, fetchTodos, createTodo } from '../../actions/todo_actions';
import { receiveErrors } from '../../actions/error_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: receiveErrors(state.errors),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
