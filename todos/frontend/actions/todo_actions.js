import * as APIUtil from '../util/todo_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TODO_ERROR = 'TODO_ERROR';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos,
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo,
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo,
});

export const todoError = error => ({
  type: TODO_ERROR,
  error,
});

export const fetchTodos = () => (store) => {
  return APIUtil.fetchTodos().then(todos => {
    return store.dispatch(receiveTodos(todos))
  })
};

export const createTodo = (todo) => (store) => {
  debugger
  return APIUtil.receiveTodo(todo).then(
    todo => store.dispatch(receiveTodo(todo)),
    err => store.dispatch(receiveErrors(err.responseJSON)))
};

