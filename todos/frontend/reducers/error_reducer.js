import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from "../actions/error_actions";

const errorReducer = (state = [], action) => {
  const nextState = [];
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_ERRORS:
      action.errors.forEach(error => {
        debugger
        nextState.push(error)
      });
      return nextState;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorReducer;
